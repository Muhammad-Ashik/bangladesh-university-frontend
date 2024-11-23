'use client'

import DesktopNavBar from './desktop/DesktopNavbar'
import MobileDrawer from './mobile/MobileDrawer'
import MobileNavBar from './mobile/MobileNavBar'

const NavBar = () => (
  <nav className='fixed top-0 left-0 right-0 z-50 bg-white shadow-md'>
    <div className='xl:container mx-auto px-4 py-3 h-20'>
      <DesktopNavBar />
      <MobileNavBar />
      <MobileDrawer />
    </div>
  </nav>
)

export default NavBar
