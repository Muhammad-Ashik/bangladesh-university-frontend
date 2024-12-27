import NavigationHeader from '@/components/common/navigation-header/NavigationHeader'
import Gallery from '@/components/gallery/Gallery'

export default function page() {
  return (
    <div>
      <NavigationHeader path='news & events > Gallery' title='Gallery' />
      <Gallery />
    </div>
  )
}
