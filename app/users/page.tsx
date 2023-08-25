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
    <div className='flex flex-wrap justify-center h-screen p-5 gap-2'>
          {
            usersData.map(user => {
              return (
                <div key={user.id} className='flex flex-col justify-center border-2 gap-1 h-40 w-60 bg-slate-300 text-center'>
                  <p className='bg-green-300'>{user.name}</p>
                  <p className='bg-green-400'>{user.email}</p>
                  <div>
                    <Link className='bg-green-100 hover:bg-red-400' href={`/users/${user.id}`}>
                      View User
                    </Link>
                  </div>
                </div>
              )
            })
          }
    </div>
  )
}
