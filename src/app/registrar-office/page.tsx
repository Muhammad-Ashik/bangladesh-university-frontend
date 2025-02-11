import NavigationHeader from '@/components/common/navigation-header/NavigationHeader'
import RegistrarOffice from '@/components/registrar-office/RegistrarOffice'

export default function page() {
  return (
    <div>
      <NavigationHeader path='' title='Office of the Registrar' />
      <RegistrarOffice />
    </div>
  )
}
