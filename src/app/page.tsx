// src/app/page.tsx

import HeroSection from '@/components/home-page/hero-section/HeroSection'
import HomeSubNavigation from '@/components/home-page/home-sub-navigation/HomeSubNavigation'
import UpdatedNews from '@/components/home-page/updated-news/UpdatedNews'
import WelcomeSection from '@/components/home-page/welcome-section/WelcomeSection'

const page = () => {
  return (
    <>
      <HeroSection />
      <HomeSubNavigation />
      <WelcomeSection />
      <UpdatedNews />
    </>
  )
}

export default page
