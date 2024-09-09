import { defineConfig } from 'drizzle-kit'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

export default defineConfig({
  dialect: 'mysql',
  schema: './utils/db/schema',
  out: './utils/db/migrations',
  dbCredentials: {
    database: process.env.DB_NAME || 'clidoc_dev',
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'clidoc',
    password: process.env.DB_PASS,
  },
})
