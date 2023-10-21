import Menubar from '@/components/Menubar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import NextAuthProvider from '@/providers/NextAuthProvider'
import ReduxProvider from '@/redux/ReduxProvider'
import { twMerge } from 'tailwind-merge'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vaccine Booking App',
  description: 'Vaccine Booking App',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={twMerge(inter.className, 'mt-16')}>
        <ReduxProvider>
          <NextAuthProvider session={session}>
            <Menubar />
            {children}
          </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
