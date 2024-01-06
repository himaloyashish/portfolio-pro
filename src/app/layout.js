import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './navbar/page.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Himaloy Bala Ashish Portfolio',
  description: 'A Portfolio project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}

        </body>
    </html>
  )
}
