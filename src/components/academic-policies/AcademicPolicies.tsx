import Image from 'next/image'
import MarksTable from './MarksTable'
import GradesTable from './GradesTable'

const AcademicPolicies = () => {
  return (
    <div className='container max-w-[1400px] mx-auto py-14 px-5'>
      <h2 className='title-40 font-bold text-secondary mb-10'>
        Academic Policy
      </h2>
      <div className='space-y-5 text-justify xl:text-left'>
        <div>
          <p className='text-16'>
            className and Examination Schedules are specified in Academic
            Calendar of the university. Information about year and semester wise
            course distribution has been included in the respective section of
            this catalog and also available in the university website.
          </p>
        </div>
        <div>
          <h3 className='text-20 font-bold'>Lesson Plan</h3>
          <p className='text-16'>
            At the beginning of the semester, each faculty member will submit a
            lesson plan with statement of the program of evaluation of students
            performance by way of essays, tests examination, seminar
            presentations along with the relative weight of these methods in
            relation to the overall grade and the timing of each major
            evaluation.
          </p>
        </div>
        <div>
          <h3 className='text-20 font-bold'>className Attendance</h3>
          <p className='text-16'>
            The students are required to attend at least 70% of the classNamees
            held in each course in a semester. Failing which they will not be
            allowed to sit for the Semester Final Examination. However, the
            authority may condone the shortage of requisite percentage on
            grounds acceptable to the authority.
          </p>
        </div>
        <div>
          <h3 className='text-20 font-bold'>
            Coding System in Final Examination
          </h3>
          <p className='text-16'>
            In order to attain transparency Final Examinations are conducted on
            the basis of coding system. In this system answer scripts are coded
            so that no examiners will be able to identify any student. Moreover,
            all answer scripts are evaluated in the university premises within a
            stipulated time and results are uploaded on the software immediately
            after the evaluation of answer scripts to publish results in a
            shortest possible time. And thereby transcripts and certificates be
            issued to the outgoing students without any delay.
          </p>
        </div>
        <div>
          <h3 className='text-20 font-bold'>Credit Hour System</h3>
          <p className='text-16'>
            The academic system of study of BU is based on credit hours. Three
            credit hours theory course represents two lecture per week per
            semester. Duration of each className is of one and half hours. Two
            credit hours theory course represents one lecture per week per
            semester. The duration of each className is of one and half hours.
            One 1.5 credit hours lab course represents one lab className per
            week per semester. Duration of each lab className will be of three
            hours. Credits are also assigned to project/thesis work taken by
            students. The amount of credits assigned to such work may vary from
            discipline to discipline.
          </p>
        </div>
        <div>
          <h3 className='text-20 font-bold'>Distribution of Marks</h3>
          <p className='text-16'>
            The distribution of marks in className participation, mid-term and
            semester final examination will be as follows:
          </p>
          <div className='w-full flex justify-center my-5'>
            <MarksTable />
          </div>
        </div>

        <div>
          <h3 className='text-20 font-bold'>Midterm and Final Examination</h3>
          <p className='text-16'>
            The university has a high ethical standard and concerted efforts
            made to conduct all examinations by fair means. 20% of marks is
            allotted for continuous assessment, 30% of marks is allotted for
            Midterm Examination and remainder 50% of marks is allotted for Final
            Examination. Midterm Examination of one and half hour duration is
            conducted by individual department and Final Examination of two hour
            duration is conducted centrally by Controller of Examinations.The
            students are evaluated by their teachers, especially when they give
            tests, quizzes and tutorials during the className hour. Conducting
            Mid-term Examination and Final Examination is a collective
            enterprise.
          </p>
        </div>
        <div>
          <h3 className='text-20 font-bold'>
            Makeup (missed / failed) examination
          </h3>
          <p className='text-16'>
            A student who has failed to set for either Mid-Term or Semester
            Final Examination or both for serious illness or death or accident
            in the family or other valid reasons may submit an application to
            the Head of the Department for Makeup/Retake Examination. This
            application must be supported by valid documentary proof. A student
            has to apply to the Controller of Examinations on prescribed form
            through concerned Head of the Department paying prescribed fees as
            determined by the competent authority.
          </p>
        </div>
        <div>
          <h3 className='text-20 font-bold'>Improvement Examinations</h3>
          <p className='text-16'>
            Student(s) obtaining C+ and below grade in any course(s) are
            eligible to sit for Improvement Examination. The concerned
            student(s) will have to re-register the course(s) and sit for the
            said examination(s) with the next batch on payment of improvement
            fees. However, for Lab/ Practical/ Sessional courses/Viva-voce, no
            Improvement Examination(s) will be entertained.
          </p>
        </div>
        <div>
          <h3 className='text-20 font-bold'>
            Dropout Courses [due to disciplinary action]/ Recourses Examinations
          </h3>
          <p className='text-16'>
            For dropout (due to disciplinary action) course(s), a student shall
            have to re-registrar & re-course the dropout course(s) and attend
            the classNamees accordingly and will sit for the examination(s) with
            the next batch paying re-course examination fee(s) for the
            course(s).
          </p>
        </div>
        <div>
          <h3 className='text-20 font-bold'>
            Grading and Performance Evaluation
          </h3>
          <h3 className='text-20 font-bold'>Grading System</h3>
          <p className='text-16'>
            The final course grade is being prepared based on an overall
            evaluation of a students performance in assignments, examinations,
            quizzes, case works, term papers, laboratory tests and className
            attendance. Each course teacher determines the grade of the student
            concerned.
          </p>
        </div>
        <div>
          <h3 className='text-20 font-bold'>Calculation of GPA/CGPA</h3>
          <p className='text-16'>
            A system of Letter Grade marking is used for the purpose of
            evaluation of a students performance in a course. A+, A, A-, B+, B,
            B-, C+, C and D are considered as passing grades. F is a failing
            grade. Besides, `I` stands for (incomplete), W (withdrawal), R
            (repeat). Credits for courses with these grades (F, I, W) do not
            apply towards graduation and are not used for the calculation of the
            Grade Point Average (GPA).
          </p>
        </div>
        <div>
          <h3 className='text-20 font-bold'>Earned Grade Point</h3>
          <p className='text-16'>
            Obtained grade points in a course* credit hours of the course.
          </p>
        </div>
        <div>
          <h3 className='text-20 font-bold'>Grade Point Average</h3>
          <p className='text-16'>
            GPA is the average of earned grade points of a student in a semester
            and CGPA is the average of earned grade points of a student in the
            courses completed in all semesters including the final last semester
            i.e GPA and CGPA
          </p>
          <div className='max-w-60 h-16 my-4'>
            <Image
              src='/images/academic-policies/calculation-1.png'
              width={500}
              height={500}
              alt='calculation'
            />
          </div>
          <p className='text-16'>
            For example, if a student passes/completes three courses in a
            semester having credit hrs of C1, C2, C3 and obtains grade points in
            the these course G1, G2, G3 respectively then:
          </p>
          <div className='max-w-72 h-16 my-4'>
            <Image
              src='/images/academic-policies/calculation-2.png'
              width={500}
              height={500}
              alt='calculation2'
            />
          </div>
          <p className='text-16'>
            In the transcript, only the Letter Grade and the corresponding Grade
            Points (not the numerical Grade) will be shown. For calculating
            CGPA, the numerical equivalence of grades is set as below: This is
            in accordance with the uniform grading system introduced by
            University Grants Commission.
          </p>
          <div className='w-full mx-auto flex justify-center my-5'>
            <GradesTable />
          </div>
        </div>

        <div>
          <h3 className='text-20 font-bold'>Grade without numerical value</h3>
          <div>
            <span>P: Pass</span>
            <span>I: Incomplete</span>
            <span>W: Withdrawal</span>
          </div>
        </div>
        <div>
          <h3 className='text-20 font-bold'>Incomplete Grade</h3>
          <p className='text-16'>
            An incomplete letter grade I will be given only when the student has
            been in regular attendance and has done satisfactory work and has
            furnished proof to the instructor within two weeks of the end of the
            term that the work cannot be completed because of illness or other
            circumstances beyond the students control. An incomplete grade not
            made up by the end of the next term shall be converted to the grade
            of 0.00 (F) by the Controller of Examinations.
          </p>
        </div>
        <div>
          <h3 className='text-20 font-bold'>Change of Grade</h3>
          <p className='text-16'>
            Within 1 (one) year of the awarding of the grades, final grades may
            be changed by the faculties on a grade form, only if there has been
            an error in computation. The grade change must be approved by the
            Head of the Department.
          </p>
        </div>
        <div>
          <h3 className='text-20 font-bold'>Withdrawal</h3>
          <p className='text-16'>
            The grade (W) is assigned when a student officially drops a course
            within the date mentioned in the academic calendar of the semester.
          </p>
        </div>
        <div>
          <h3 className='text-20 font-bold'>Repeating Courses</h3>
          <p className='text-16'>
            If a student fails to get a passing grade in a course, he/she will
            be awarded an F grade and will have to repeat the course on payment
            of fees. The student must re-take a failing course when offered
            after paying the necessary fees and must also successfully complete
            the course. The grade earned on the retake will be shown in the
            transcript along with the F grade earned in the first time the
            course was taken. But the grade earned on the course(s) repeated
            will be substituted for “F” in computing CGPA. A course can be
            retaken only once. Improvement of course grade will only be allowed
            to students with C, D, or F after payment of prescribed fees.
          </p>
        </div>
        <div>
          <h3 className='text-20 font-bold'>Academic Standing</h3>
          <p className='text-16'>
            For graduate programs, a student must maintain a minimum CGPA of
            2.25 to remain in good standing. Students of undergraduate programs
            with a CGPA between 1 and 2 after the first two semesters will be
            placed on probation for the next two semesters. If students placed
            on probation fail to raise their CGPA to at least 2 after the
            probation period, they will face dismissal from the course. If a
            students CGPA falls below 2, he/she will again be placed on
            probation.
          </p>
        </div>

        <div>
          <h3 className='text-20 font-bold'>Leave of Absence</h3>
          <p className='text-16'>
            A leave of absence may be granted to a student for up to three
            semesters. But the student must be in good academic standing (not on
            academic probation or subject to dismissal). A student applying for
            such leave must mention a definite semester for re-registration and
            must register within three semesters of the date of leaving
            university. Only one leave of absence can be granted. A leave of
            absence is granted through the office of the Head of the Department.
            A student who does not return for registration during the specified
            semester will be classNameified as an official withdrawal and must
            apply for re-admission through the administration office.
          </p>
        </div>

        <div>
          <h3 className='text-20 font-bold'>Online Result</h3>
          <p className='text-16'>
            Online Results are generated by the departments concerned in the
            Student Management System, from where every registered student can
            observe his/her result/progress soon after the conclusion of each
            semester.
          </p>
        </div>

        <div>
          <h3 className='text-20 font-bold'>Re-checking of a Script</h3>
          <p className='text-16'>
            (1) The student can make a written appeal to the Controller of
            Examinations for re-checking his/her specific answer script(s) after
            payment of predetermined fee(s).
            <br />
            (2) The Controller of Examinations, with prior approval of the V.C.,
            shall send the script to the Head of the concerned department.
            <br />
            (3) The Head will arrange to re-check the script(s) to see whether
            any error is made and whether any portion(s) is not evaluated by
            mistake and correct the grade, if necessary, & the revised final
            grade may be recorded.
            <br />
            (4) The appeal must be made within three weeks after the grade is
            first published.
          </p>
        </div>

        <div>
          <h3 className='text-20 font-bold'>Degree Requirements</h3>
          <p className='text-16'>
            The minimum CGPA (Cumulative Grade Point Average) is 2.25 on a scale
            of 4 for obtaining a Degree.
          </p>
        </div>

        <div>
          <h3 className='text-20 font-bold'>Transcript</h3>
          <p className='text-16'>
            Transcripts covering result(s) of one/more than one semester or of
            all semesters studied and completed by a student may be supplied to
            a student on his/her demand on payment of predetermined fee(s). Each
            transcript shall bear the embossed Bangladesh University Monogram.
          </p>
        </div>

        <div>
          <h3 className='text-20 font-bold'>
            Provisional/Original Certificate
          </h3>
          <p className='text-16'>
            A student having completed all his/her courses as well as the
            duration of his assigned program shall be entitled to have his/her
            Provisional/Original Certificate as the case may be on payment of
            predetermined fee(s). No student shall be issued a
            Provisional/Original Certificate unless he/she completes the
            required duration of the program.
          </p>
        </div>

        <div>
          <h3 className='text-20 font-bold'>
            Procedure for Withdrawal of Certificate
          </h3>
          <p className='text-16'>
            A student willing to obtain his/her Certificate
            (Provisional/Original) is required to fill up a prescribed Proforma
            and submit all necessary papers & Bank payment receipt with it.
            He/she must also submit a clearance certificate from the Library and
            Accounts section.
          </p>
        </div>

        <div>
          <h3 className='text-20 font-bold'>
            Unfair Means & Disciplinary action
          </h3>
          <h3 className='text-20 font-bold'>a. Unfair Means in Exam Halls</h3>
        </div>

        <div>
          <p className='text-16 font-bold'>
            The following are considered as unfair means:
          </p>
          <ul className='list-decimal list-inside space-y-2 text-16'>
            <li>Communicating with one another.</li>
            <li>
              Possession of any incriminating document whether used or not.
            </li>
            <li>Copying from another students script/report/paper.</li>
            <li>
              Copying from desk or palm of the hand or from other incriminating
              documents.
            </li>
            <li>
              Any approach in direct or indirect form to influence the teacher
              concerning grades.
            </li>
            <li>
              Using abusive language or holding out threats to the invigilator.
            </li>
            <li>
              Creating disturbance or obstruction inside the Examination Hall.
            </li>
            <li>Unruly behavior which disrupts academic discipline/program.</li>
          </ul>
        </div>
        <div>
          <h3 className='text-20 font-bold'>b. Disciplinary Action</h3>
          <p className='text-16'>
            The result of a student may be withheld at the report of an
            invigilator or course teacher for adopting unfair means. Adoption of
            unfair means may also lead to expulsion of the student from the
            program and the university. Necessary punitive measures in this
            regard will be taken in the meeting of a committee constituted by
            the authority.
          </p>
        </div>
        <div>
          <h3 className='text-20 font-bold'>Appeal Against Punishment</h3>
          <p className='text-16'>
            If a student is aggrieved by an order of punishment awarded by the
            authority as per the decision of the Disciplinary Committee, he/she
            may file an appeal before the Vice Chancellor within 01 (one) month
            of passing such an order. The Disciplinary Committee and Vice
            Chancellor shall, as an appellate authority, review the case and
            pass such order as deemed proper and just.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AcademicPolicies
