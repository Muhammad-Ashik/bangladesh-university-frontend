// src/layouts/MainLayout.tsx
import Footer from '@/components/common/footer/Footer'
import Navbar from '@/components/common/navbar/Navbar'
import { ReactNode } from 'react'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <main className='flex-grow mx-auto'>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
