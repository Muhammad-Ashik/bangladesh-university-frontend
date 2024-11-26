import CareerPage from '@/components/career-page/CareerPage'
import NavigationHeader from '@/components/common/navigation-header/NavigationHeader'

export default function page() {
  return (
    <div>
      <NavigationHeader path='Home > Career' title='Our Jobs' />
      <CareerPage />
    </div>
  )
}
