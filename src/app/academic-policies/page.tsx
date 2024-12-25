import AcademicPolicies from '@/components/academic-policies/AcademicPolicies'
import NavigationHeader from '@/components/common/navigation-header/NavigationHeader'

export default function page() {
  return (
    <div>
      <NavigationHeader
        path='Home > Academic Policies'
        title='Academic Policies'
      />
      <AcademicPolicies />
    </div>
  )
}
