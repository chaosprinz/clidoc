import { signIn } from '@/utils/auth'
import { AuthError } from 'next-auth'
import { redirect } from 'next/navigation'

export default function Login() {
  return (
    <div>
      <form
        action={async (formData) => {
          'use server'
          try {
            await signIn('nodemailer', {
              email: formData.get('email') as string,
            })
          } catch (error) {
            console.error(error)
            if (error instanceof AuthError) {
              return redirect(`/api/auth/error?error=${error.type}`)
            }
            throw error
          }
        }}
      >
        <fieldset>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </fieldset>

        <fieldset>
          <button type="submit">Login</button>
        </fieldset>
      </form>
    </div>
  )
}
