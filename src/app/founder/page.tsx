import NavigationHeader from '@/components/common/navigation-header/NavigationHeader'
import FounderPage from '@/components/founder-page/FounderPage'

export default function page() {
  return (
    <div>
      <NavigationHeader path='Home > The Founder' title='The Founder' />
      <FounderPage />
    </div>
  )
}
