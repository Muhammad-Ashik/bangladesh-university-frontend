import AllEvents from '@/components/all-events/AllEvents'
import NavigationHeader from '@/components/common/navigation-header/NavigationHeader'
import React from 'react'

export default function page() {
  return (
    <div>
      <NavigationHeader path='Home > Offered-Degrees' title='Offered Degrees' />
      <AllEvents />
    </div>
  )
}
