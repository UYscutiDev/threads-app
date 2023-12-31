import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import { Inter } from 'next/font/google'
import Topbar from '@/components/shared/Topbar'
import Bottombar from '@/components/shared/Bottombar'
import Leftsidebar from '@/components/shared/LeftSidebar'
import Rightsidebar from '@/components/shared/RightSidebar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Threads',
  description: 'A Next.js 13 Meta Threads Application'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          <main className='flex'>
            <Leftsidebar />
            <section className='main-container'>
              <div className='w-full max-w-4xl'>
                {children}
              </div>
              </section>
            <Rightsidebar/>
            </main>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  )
}
