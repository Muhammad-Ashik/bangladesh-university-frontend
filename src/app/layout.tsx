// src/app/layout.tsx
import { ReactNode } from 'react'
import MainLayout from '../layouts/MainLayout'
import './globals.css'
import './fonts.css'

export const metadata = {
  title: 'Bangladesh University',
  description: 'Providing quality education and resources',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
