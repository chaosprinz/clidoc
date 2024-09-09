import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'

const createDb = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'clidoc_dev',
    user: process.env.DB_USER || 'clidoc',
    password: process.env.DB_PASS,
  })
  return drizzle(connection)
}

export const db = createDb()
