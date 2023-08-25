import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllUsers } from '@/lib/requests'

export const metadata: Metadata = {
  title: 'Users',
}

export default async function UsersPage() {

  // fetch happening at build time, since this is a server comp
  const usersData: User[] = await getAllUsers();

  return (
    <div>
        <h1>Users Page</h1>
        <Link href="/">Home</Link>
        {
          usersData.map(user => {
            return (
              <>
                <div key={user.id}>
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                  <Link href={`/users/${user.id}`}>View User</Link>
                </div>
              </>
            )
          })
        }
    </div>
  )
}
