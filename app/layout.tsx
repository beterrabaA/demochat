import { ReactNode } from 'react'
import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

import { AuthContextProvider } from '@/context/AuthContext'
import SignOut from '@/components/SignOut'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  applicationName: 'Demochat',
  authors: {
    name: 'Lucas Vieira',
    url: new URL('https://github.com/beterrabaA'),
  },
  title: 'DemoChat',
  description: 'A fullstack application to chat with a bot',
  publisher: 'Vercel',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <div className="App">
            <header>
              <h1>⚛️🔥💬</h1>
              <SignOut />
            </header>
            {children}
          </div>
        </AuthContextProvider>
      </body>
    </html>
  )
}
