import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './custom.css'
import Header from "@/components/Header"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nuri DEMIR',
  description: 'Nuri DEMIR portfolio web site.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
