import { serial, mysqlTable, varchar } from 'drizzle-orm/mysql-core'

export const klienten = mysqlTable('Klienten', {
  id: serial('id').primaryKey(),
  vorname: varchar('vorname', { length: 255 }).notNull(),
  familienname: varchar('familienname', { length: 255 }).notNull(),
})

export type Klient = typeof klienten.$inferSelect
export type NewKlient = typeof klienten.$inferInsert
