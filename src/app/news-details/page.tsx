import NavigationHeader from '@/components/common/navigation-header/NavigationHeader'
import NewsDetails from '@/components/news-details/NewsDetails'

export default function page() {
  return (
    <div>
      <NavigationHeader path='Home > News-Details' title='News Details' />
      <NewsDetails />
    </div>
  )
}
