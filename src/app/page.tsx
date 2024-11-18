// src/app/page.tsx

import HeroSection from '@/components/hero-section/HeroSection'
import HomeSubNavigation from '@/components/home-sub-navigation/HomeSubNavigation'
import UpdatedNews from '@/components/updated-news/UpdatedNews'
import WelcomeSection from '@/components/welcome-section/WelcomeSection'
import EventAndNotice from '@/components/event-and-notice/EventAndNotice'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <HomeSubNavigation />
      <WelcomeSection />
      <EventAndNotice />
      <UpdatedNews />
    </div>
  )
}

export default HomePage
