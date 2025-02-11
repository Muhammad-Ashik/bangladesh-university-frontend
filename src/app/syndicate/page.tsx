import NavigationHeader from '@/components/common/navigation-header/NavigationHeader'
import Syndicate from '@/components/syndicate/Syndicate'

export default function page() {
  return (
    <div>
      <NavigationHeader path='' title='Syndicate' />
      <Syndicate />
    </div>
  )
}
