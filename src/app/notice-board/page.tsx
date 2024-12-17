import NavigationHeader from '@/components/common/navigation-header/NavigationHeader'
import NoticeBoard from '@/components/notice-board/NoticeBoard'
import React from 'react'

export default function page() {
  return (
    <div>
      <NavigationHeader path='Home > Notice' title='All Notice' />
      <NoticeBoard />
    </div>
  )
}
