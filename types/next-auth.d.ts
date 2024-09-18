import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      email: string
      name: string
      roles: string[]
      phone: string | null
      image: string
      approved: boolean
    }
  }

  interface User {
    id: string
    email: string
    name: string
    roles: string[]
    phone: string | null
    image: string
    approved: boolean
  }
}
