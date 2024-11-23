'use client'

import DesktopNavBar from './desktop/DesktopNavbar'
import MobileDrawer from './mobile/MobileDrawer'
import MobileNavBar from './mobile/MobileNavBar'

const NavBar = () => (
  <nav>
    <div className='xl:container mx-auto px-4 py-3'>
      <DesktopNavBar />
      <MobileNavBar />
      <MobileDrawer />
    </div>
  </nav>
)

export default NavBar
