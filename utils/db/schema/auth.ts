import { relations } from 'drizzle-orm'
import {
  mysqlTable,
  varchar,
  text,
  datetime,
  int,
  primaryKey,
  json,
  boolean,
} from 'drizzle-orm/mysql-core'
import { AdapterAccount } from 'next-auth/adapters'

export const users = mysqlTable('user', {
  id: varchar('id', { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => `${crypto.randomUUID()}`),
  name: text('name'),
  email: varchar('email', { length: 255 }).unique().notNull(),
  emailVerified: datetime('emailVerified', { mode: 'date' }),
  image: varchar('image', { length: 255 }),
  phone: varchar('phone', { length: 255 }),
  roles: json('roles').$type<string[]>().notNull().default(['mitarbeiter']),
  approved: boolean('approved').notNull().default(false),
})

export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert

export const accounts = mysqlTable(
  'account',
  {
    userId: varchar('userId', { length: 255 })
      .notNull()
      .references(() => users.id, {
        onDelete: 'cascade',
      }),
    type: text('type').$type<AdapterAccount['type']>().notNull(),
    provider: varchar('provider', { length: 255 }).notNull(),
    providerAccountId: varchar('providerAccountId', { length: 255 }).notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: int('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  (account) => ({
    compundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  }),
)

export type Account = typeof accounts.$inferSelect
export type NewAccount = typeof accounts.$inferInsert

export const sessions = mysqlTable('session', {
  sessionToken: varchar('sessionToken', { length: 255 }).notNull().primaryKey(),
  userId: varchar('userId', { length: 255 })
    .notNull()
    .references(() => users.id, {
      onDelete: 'cascade',
    }),
  expires: datetime('expires', { mode: 'date' }).notNull(),
})

export type Session = typeof sessions.$inferSelect
export type NewSession = typeof sessions.$inferInsert

export const verificationTokens = mysqlTable(
  'verificationToken',
  {
    identifier: varchar('identifier', { length: 255 }).notNull(),
    token: varchar('token', { length: 255 }).notNull(),
    expires: datetime('expires', { mode: 'date' }).notNull(),
  },
  (token) => ({
    compundKey: primaryKey({ columns: [token.identifier, token.token] }),
  }),
)

export type VerificationToken = typeof verificationTokens.$inferSelect
export type NewVerificationToken = typeof verificationTokens.$inferInsert
