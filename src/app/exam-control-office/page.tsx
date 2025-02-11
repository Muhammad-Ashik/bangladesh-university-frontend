import NavigationHeader from '@/components/common/navigation-header/NavigationHeader'
import ExamControlOffice from '@/components/exam-control-office/ExamControlOffice'

export default function page() {
  return (
    <div>
      <NavigationHeader path='' title='Office of the Exam Control' />
      <ExamControlOffice />
    </div>
  )
}
