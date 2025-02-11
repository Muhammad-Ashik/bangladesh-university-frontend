import NavigationHeader from '@/components/common/navigation-header/NavigationHeader'
import Treasurer from '@/components/treasurer/Treasurer'

export default function page() {
  return (
    <div>
      <NavigationHeader path='' title='Treasurer' />
      <Treasurer />
    </div>
  )
}
