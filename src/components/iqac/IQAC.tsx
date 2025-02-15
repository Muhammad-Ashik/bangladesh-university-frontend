import Image from 'next/image'
import { iqacData } from './iqacData'
import Member from '../reusable-ui/member/Member'

export default function IQAC() {
  return (
    <div className='max-w-[1300px] mx-auto px-5 md:px-10 xl:px-0 py-10'>
      <div className='grid lg:grid-cols-12 justify-between gap-7'>
        <div className='lg:col-span-7'>
          <h2 className='title-40 font-bold my-5'>Introduction of IQAC</h2>
          <p className='text-14'>
            Quality Assurance is a continuous process of Quality Improvement in
            Higher Education through Accreditation and Assessment. Bangladesh
            University endeavors to promote and sustain quality in all aspects
            and dimensions of learning and operations. To bring the dynamics of
            education into a high level, in 2008, a quality assurance center
            (AQAC) was established in the university. The primordial function of
            the center was to oversee and lead the quality assurance activities
            of the university through a series of building awareness and
            training of the academic and administrative personnel. In 2015, AQAC
            was transformed/restructured into an Institutional Quality Assurance
            Cell (IQAC) as per the mandate by the University Grants Commission
            of Bangladesh (UGC) - Ministry of Education (MoE).
          </p>
          <p className='text-14 my-4'>
            Quality and Accountability are two inseparable and indispensable
            actions. Quality is not given on a silver platter. It has to be
            worked out in view of its varying applications and uses. It has to
            suit and pass the test of time considering the fast and emerging
            developments, demands, and needs of the potential users. It has to
            be sustained and made accountable in the process of implementation
            and close coordination with various units of the university. It
            serves as a vanguard of quality of the university.
          </p>
          <ul className='text-14 text-primary list-disc pl-3 space-y-2'>
            <li>
              Bangladesh University established Bangladesh University Quality
              Assurance Center (BUQAC) in September 2008.
            </li>
            <li>
              Bangladesh University is the first university in Bangladesh to
              establish a Quality Assurance Center among all private and public
              universities.
            </li>
            <li>
              BUQAC has gone through local & international accreditation of
              different academic programs.
            </li>
            <li>
              Bangladesh University Management Operation System is ISO 9001:2008
              certified by SGS.
            </li>
            <li>BUQAC has gone through many other QA activities.</li>
            <li>BUQAC was functional till December 2014.</li>
          </ul>
        </div>
        <div className='lg:col-span-5 mt-10'>
          <Image
            className='w-full'
            src='/images/iqac/iqac-1.png'
            width={500}
            height={500}
            alt='images'
          />
        </div>
      </div>

      <div className='grid lg:grid-cols-12 justify-between gap-7 my-20'>
        <div className='lg:col-span-7'>
          <h2 className='title-40 font-bold pb-4'>Message from the Director</h2>
          <div className='space-y-4'>
            <p className='text-14'>
              Bangladesh University prioritizes quality over quantity in its
              academic programs and services. Since 2007, it has collaborated
              with global QA organizations like APQN and AIU-UNESCO to enhance
              its quality assurance framework. In 2011, its business, Computer
              Science, and EEE programs received international accreditation,
              making it the first university in Bangladesh to achieve this
              milestone. This achievement earned global recognition, with APQN
              awarding it as the Best Model QA University for Asia and the
              Pacific in 2016. Such recognition reflects the university’s
              commitment to maintaining international standards in higher
              education.
            </p>
            <p className='text-14'>
              BU-IQAC, established in 2013, plays a key role in implementing QA
              initiatives, participating in international forums, collaborating
              in research, and sharing expertise with other institutions. It
              continuously works to improve teaching methodologies, learning
              outcomes, and institutional governance to ensure a high-quality
              academic environment. The cell also supports faculty development,
              student engagement, and administrative efficiency through
              structured quality assurance mechanisms.
            </p>
            <p className='text-14'>
              This webpage serves to document and share BU-IQACs activities,
              ensuring transparency, accessibility, and alignment with UGC
              policies. By providing relevant and updated information, it aims
              to strengthen the universitys commitment to quality enhancement
              and innovation in education.
            </p>
          </div>
        </div>
        <div className='lg:col-span-5'>
          <Image
            className='w-full my-5'
            src='/images/iqac/iqac-2.JPG'
            height={500}
            width={500}
            alt='iqac-image'
          />
          <h3 className='font-bold text-18 my-2'>QUAZI AZHER ALI</h3>
          <p>Founder & First Vice-Chancellor</p>
        </div>
      </div>

      <div>
        <h2 className='title-40 font-bold pb-3'>Mission of IQAC</h2>
        <ul className='space-y-2 text-14 list-disc pl-3 mb-5'>
          <li>
            To promote a culture of quality enhancement within Bangladesh
            University by ensuring that academic entities adopt and implement
            Quality Assurance (QA) standards and benchmarked quality criteria.{' '}
          </li>
          <li>
            To develop a system for conscious, consistent, and strategic actions
            to improve the academic performance of the university.
          </li>
          <li>
            To undertake measures for quality enhancement and excellence in
            teaching through internationalization and the adoption of best
            practices in quality assurance.
          </li>
          <li>
            To foster a culture of continuous quality improvement at Bangladesh
            University by ensuring the adoption and implementation of QA
            standards and internationally benchmarked quality criteria.{' '}
          </li>
          <li>
            To establish a structured system for continuous monitoring,
            assessment, and enhancement of academic performance across the
            university.
          </li>
          <li>
            To drive excellence in teaching and learning through international
            collaboration, innovation, and integration of global best practices
            in quality assurance.
          </li>
        </ul>
        <Image
          className='w-full'
          src='/images/iqac/iqac-3.png'
          height={400}
          width={1000}
          alt='iqac-cover'
        />
      </div>

      <div className='my-20'>
        <h2 className='title-40 font-bold'>
          Members of Institutional Quality Assurance Cell (IQAC)
        </h2>
        <p className='text-14 my-3'>
          The Institutional Quality Assurance Cell (IQAC) of Bangladesh
          University ensures academic excellence by implementing quality
          assurance standards. Led by the Director, with support from Additional
          Directors, faculty, and administrative representatives, it integrates
          QA practices into teaching, governance, and institutional policies.
          Collaborating with the UGC and other regulatory bodies, IQAC fosters
          continuous quality improvement and international best practices.
        </p>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
          {iqacData.map((data, index) => (
            <Member data={data} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
