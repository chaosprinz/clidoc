import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { db } from './db'
import { Adapter } from 'next-auth/adapters'
import NextAuth from 'next-auth'
import Nodemailer from 'next-auth/providers/nodemailer'

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: 'jwt' as 'jwt' },
  adapter: DrizzleAdapter(db) as unknown as Adapter,
  providers: [
    Nodemailer({
      server: {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {},
})
