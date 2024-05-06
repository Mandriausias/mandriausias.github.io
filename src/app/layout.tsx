import type { Metadata } from 'next'
import './globals.css'
import { Montserrat, Roboto_Mono } from 'next/font/google'
import NavBar from '@/components/nav/NavBar'

const montserrat = Montserrat({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Homepage',
  description: 'Initial page description'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dracula">
      <body className={`prose ${robotoMono.className} card w-screen min-w-fit max-w-full content-center lg:mx-auto`}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  )
}
