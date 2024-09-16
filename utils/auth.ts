import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { db } from './db'
import { Adapter } from 'next-auth/adapters'
import NextAuth from 'next-auth'
import Nodemailer from 'next-auth/providers/nodemailer'

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: 'database' },
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
  callbacks: {
    async session({ session, user }) {
      const userData = await db.query.users.findFirst({
        where: (users, { eq }) => eq(users.id, session.user.id),
      })

      if (userData) {
        session.user = {
          id: userData.id,
          email: userData.email,
          name: userData.name || '',
          role: userData.role,
          phone: userData.phone || '',
          image: userData.image || '',
          emailVerified: userData.emailVerified || null,
        }
      }
      return session
    },
  },
})
