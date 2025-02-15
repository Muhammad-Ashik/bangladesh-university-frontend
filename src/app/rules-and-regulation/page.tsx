import NavigationHeader from '@/components/common/navigation-header/NavigationHeader'
import RulesAndRegulation from '@/components/rules-and-regulation/RulesAndRegulation'

export default function page() {
  return (
    <div>
      <NavigationHeader
        path='Home > Rules-and-Regulation'
        title='Rules & Regulation'
      />
      <RulesAndRegulation />
    </div>
  )
}
