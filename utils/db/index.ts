import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'

let db
let connection: any

async function connect() {
  if (!connection) {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'clidoc',
      database: process.env.DB_NAME || 'clidoc_dev',
      password: process.env.DB_PASS,
    })
  }
  db = drizzle(connection)

  function shutdown() {
    if (connection) {
      console.log('Shutting down db')
      connection
        .end()
        .then(() => console.log('DB shutdown'))
        .catch(console.error)
        .finally(() => process.exit(0))
    }
  }

  process.on('SIGINT', shutdown)
  process.on('SIGTERM', shutdown)

  return db
}

export { connect, connection }
