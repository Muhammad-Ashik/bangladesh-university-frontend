import Calendar from '@/components/calendar/Calendar'
import NavigationHeader from '@/components/common/navigation-header/NavigationHeader'

export default function page() {
  return (
    <div>
      <NavigationHeader path='Home > Caldendar' title='Calendar' />
      <Calendar />
    </div>
  )
}
