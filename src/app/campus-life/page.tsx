import CampusLife from '@/components/campus-life/CampusLife'
import NavigationHeader from '@/components/common/navigation-header/NavigationHeader'

export default function page() {
  return (
    <div>
      <NavigationHeader path='Home > Campus-Life' title='Campus Life' />
      <CampusLife />
    </div>
  )
}
