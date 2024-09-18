'use client'
import { Table, TD, TR } from '@/components/ui/table'
import { User } from 'next-auth'

export function UsersTable({
  users,
  switchApproval,
}: {
  users: User[]
  switchApproval: (user: User) => void
}) {
  return (
    <Table
      className="border-2 border-slate-600"
      headTitles={['Name', 'Email', 'Phone', 'Image', 'Approved', 'Roles']}
    >
      {users.map((user) => (
        <TR
          key={user.id}
          className="even:bg-blue-200 hover:bg-slate-400 dark:even:bg-slate-900 dark:hover:bg-slate-700"
        >
          <TD>{user.name}</TD>
          <TD>{user.email}</TD>
          <TD>{user.phone}</TD>
          <TD>{user.image}</TD>
          <TD className="text-center">
            <input
              className="cursor-pointer"
              type="checkbox"
              checked={user.approved}
              onChange={() => switchApproval(user)}
            />
          </TD>
          <TD>{user.roles}</TD>
        </TR>
      ))}
    </Table>
  )
}
