import NavigationHeader from '@/components/common/navigation-header/NavigationHeader'
import OfferedDegrees from '@/components/offered-degrees/OfferedDegrees'
import React from 'react'

export default function page() {
  return (
    <div>
      <NavigationHeader path='Home > Offered-Degrees' title='Offered Degrees' />
      <OfferedDegrees />
    </div>
  )
}
