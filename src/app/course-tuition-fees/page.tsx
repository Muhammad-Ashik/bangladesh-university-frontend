import NavigationHeader from '@/components/common/navigation-header/NavigationHeader'
import CourseTuitionFees from '@/components/course-tuition-fees/CourseTuitionFees'

export default function page() {
  return (
    <div>
      <NavigationHeader
        path='Home > Course-Tuition-Fees'
        title='Course Tuition Fees'
      />
      <CourseTuitionFees />
    </div>
  )
}
