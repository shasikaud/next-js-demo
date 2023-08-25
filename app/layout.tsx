import NavBar from '@/components/NavBar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-700 min-w-screen-lg'>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
