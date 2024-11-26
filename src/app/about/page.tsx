import AboutPage from '@/components/about/AboutPage'
import NavigationHeader from '@/components/common/navigation-header/NavigationHeader'

export default function page() {
  return (
    <div>
      <NavigationHeader
        path='Home > About'
        title='About Bangladesh University'
      />
      <AboutPage />
    </div>
  )
}
