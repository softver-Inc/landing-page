import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Softver ',
  description: 'Form softver',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const styles = `${inter.className}  bg-gray-200`

  return (
    <html lang="en">
      <body className={styles}>
        {children}
        </body>
    </html>
  )
}
