import NavigationHeader from '@/components/common/navigation-header/NavigationHeader'
import ContactUs from '@/components/contact-us/ContactUs'

export default function page() {
  return (
    <div>
      <NavigationHeader path='Home > Contact-Us' title='Contact Us' />
      <ContactUs />
    </div>
  )
}
