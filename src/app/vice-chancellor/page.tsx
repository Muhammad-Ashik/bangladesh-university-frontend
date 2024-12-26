import NavigationHeader from '@/components/common/navigation-header/NavigationHeader'
import ViceChancellor from '@/components/vice-chancellor/ViceChancellor'

export default function page() {
  return (
    <div>
      <NavigationHeader path='' title='Office of the Vice-Chancellor' />
      <ViceChancellor />
    </div>
  )
}
