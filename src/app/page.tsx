// src/app/page.tsx

import EventAndNotice from '@/components/event-and-notice/EventAndNotice'
import HeroSection from '@/components/home-page/hero-section/HeroSection'
import HomeSubNavigation from '@/components/home-page/home-sub-navigation/HomeSubNavigation'
import UpdatedNews from '@/components/home-page/updated-news/UpdatedNews'
import WelcomeSection from '@/components/welcome-section/WelcomeSection'

const page = () => {
  return (
    <>
      <HeroSection />
      <HomeSubNavigation />
      <WelcomeSection />
      <EventAndNotice />
      <UpdatedNews />
    </>
  )
}

export default page
