import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import * as schema from '@/utils/db/schema'

const connection = await mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'clidoc',
  password: process.env.DB_PASS,
  database: process.env.DB_NAME || 'clidoc_dev',
})

export const db = drizzle(connection, { schema, mode: 'default' })
