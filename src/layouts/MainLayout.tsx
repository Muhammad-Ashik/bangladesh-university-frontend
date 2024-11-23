// src/layouts/MainLayout.tsx
import {ReactNode} from 'react'
import Navbar from '../components/navbar/Navbar'
import UpdatedFooter from '@/components/updated-footer/UpdatedFooter'

const MainLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <main className='flex-grow mx-auto'>{children}</main>
      <UpdatedFooter />
    </div>
  )
}

export default MainLayout
