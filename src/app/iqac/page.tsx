import NavigationHeader from '@/components/common/navigation-header/NavigationHeader'
import IQAC from '@/components/iqac/IQAC'

export default function page() {
  return (
    <div>
      <NavigationHeader
        path='Home > IQAC'
        title='Institutional Quality Assurance Cell'
      />
      <IQAC />
    </div>
  )
}
