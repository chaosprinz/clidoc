'use client'
import { User } from 'next-auth'

export function UsersTable({
  users,
  switchApproval,
}: {
  users: User[]
  switchApproval: (user: User) => void
}) {
  return (
    <table className="border-2 border-slate-600">
      <thead>
        <tr className="border-y-2 border-slate-600">
          <TH>Name</TH>
          <TH>Email</TH>
          <TH>Telefon</TH>
          <TH>Bild</TH>
          <TH>Bestätigt</TH>
          <TH>Roles</TH>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <TD>{user.name}</TD>
            <TD>{user.email}</TD>
            <TD>{user.phone}</TD>
            <TD>{user.image}</TD>
            <TD>
              <input
                type="checkbox"
                checked={user.approved}
                onChange={() => switchApproval(user)}
              />
            </TD>
            <TD>{user.roles}</TD>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function TH({ children }: { children: React.ReactNode }) {
  return <th className="border-r-2 border-slate-600 p-2">{children}</th>
}

function TD({ children }: { children: React.ReactNode }) {
  return <td className="border-r-2 border-slate-600 p-2">{children}</td>
}
