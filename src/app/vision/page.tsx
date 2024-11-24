import NavigationHeader from '@/components/common/navigation-header/NavigationHeader'
import VisionAndMission from '@/components/vision-and-mission/VisionAndMission'
import React from 'react'

export default function page() {
  return (
    <div>
      <NavigationHeader
        path='Home > Vision and Mission'
        title='Our Vision And Mission'
      />
      <VisionAndMission />
    </div>
  )
}
