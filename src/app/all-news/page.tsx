import AllNews from '@/components/all-news/AllNews'
import NavigationHeader from '@/components/common/navigation-header/NavigationHeader'

export default function page() {
  return (
    <div>
      <NavigationHeader path='Home > All-News' title='All News' />
      <AllNews />
    </div>
  )
}
