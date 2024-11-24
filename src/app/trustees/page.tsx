import NavigationHeader from '@/components/common/navigation-header/NavigationHeader'
import Trustees from '@/components/trustees/Trustees'
import React from 'react'

export default function page() {
  return (
    <div>
      <NavigationHeader
        path='Home > Board of Trustees'
        title='Board of Trustees'
      />
      <Trustees />
    </div>
  )
}
