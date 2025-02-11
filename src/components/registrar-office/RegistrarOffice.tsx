import Image from 'next/image'
import Member from '../reusable-ui/member/Member'
import { registrarOfficeData } from './registrarOfficeData'

export default function RegistrarOffice() {
  return (
    <div className='container max-w-[1400px] mx-auto py-14 p-4 sm:px-5'>
      <Image
        src='/images/registrar-office/registrar.png'
        width={500}
        height={500}
        alt='registrar'
      />
      <h2 className='title-40 font-bold text-secondary mb-10 mt-5'>
        Message from the Registrar
      </h2>
      <div>
        <div className='text-18 text-justify sm:text-left space-y-7'>
          <p>
            Bangladesh University was set up in 2001 (October) in the prime
            location of Dhaka City near Asad Gate to provide higher education at
            an affordable cost. The Founder Late Quazi Azher Ali had a unique
            dream gained through his wide experiences to impart education to
            financially backward students spreading all over the rural areas in
            Bangladesh.
          </p>
          <p>
            We are delighted to know that you have decided to undertake your
            tertiary studies at the Bangladesh University. Obviously you will
            come across a wide range of our courses and different activities
            done at the University level which will give you a flavour of life
            in our campus.
          </p>
          <p>
            The Bangladesh University is a unique blending community of students
            and staff dedicated to the welfare of student, teacher and staff
            usually and the community as well. Our aim is to provide the best
            possible environment for teaching, learning, research and public
            services, and our track record of success is excellent. We will
            continue to ensure that your period of study in this University will
            be filled with excitement and experiences that you can treasure for
            lifetime. We also recognize that the quality of student experiences
            derives from more than academic study. That is why the University
            encourages students to join and actively participate in co
            curricular activities and use the various sports and recreational
            facilities available.
          </p>
          <p>
            The University has taken all reasonable steps to make sure that the
            information on this website about course content, structure,
            teaching facilities, lab and staffing are accurate and up-to-date.
            Students are advised to contact the concerned department in case
            that the demand for certain courses, staff and resources are not
            available. University cannot guarantee that all courses featured in
            this website will necessarily be offered. Some courses may have to
            be combined with others, or their content be changed as resources
            dictate or permit and the need of the students.
          </p>
          <p>
            However, my dear students, we look forward to welcoming you to the
            Bangladesh University for your future bright career.
          </p>
        </div>
        <div className='my-5 space-y-2'>
          <h3 className='font-bold'>Professor Dr. Md. Jahangir Alam</h3>
          <p>Registrar</p>
          <p>Email: vc@bu.edu.bd</p>
          <p>Phone: 01755559300</p>
        </div>
      </div>
      <div className='my-28 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
        {registrarOfficeData.map((data, index) => (
          <Member data={data} index={index} key={index} />
        ))}
      </div>
    </div>
  )
}
