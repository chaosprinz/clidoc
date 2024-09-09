import { serial, mysqlTable, varchar } from 'drizzle-orm/mysql-core'

export const clients = mysqlTable('Klienten', {
  id: serial('id').primaryKey(),
  vorname: varchar('vorname', { length: 255 }).notNull(),
  familienname: varchar('familienname', { length: 255 }).notNull(),
})

export type Client = typeof clients.$inferSelect
export type NewClient = typeof clients.$inferInsert
