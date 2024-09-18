import { db } from '@/utils/db'
import { users } from '@/utils/db/schema'
import { eq } from 'drizzle-orm'
import { User } from 'next-auth'
import { revalidatePath } from 'next/cache'

/**
 * Switches the approval status of a given user and revalidates the /admin/users page
 * @param user The user to switch approval for
 */
export const switchApproval = async (user: User) => {
  'use server'
  const userData = await db
    .update(users)
    .set({ approved: !user.approved })
    .where(eq(users.id, user.id as string))

  revalidatePath('/admin/users')
}
