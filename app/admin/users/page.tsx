import { auth, isAdmin, isApproved } from '@/utils/auth'
import { UsersTable } from '@/components/admin/users/table'
import { db } from '@/utils/db'
import { switchApproval } from '@/actions/user/switchApproval'

export default async function Users() {
  const session = await auth()

  if (!session?.user || !isApproved(session) || !isAdmin(session)) {
    return <div>Unauthorized</div>
  }

  const users = await db.query.users.findMany()

  return (
    <div>
      <UsersTable users={users} switchApproval={switchApproval} />
    </div>
  )
}
