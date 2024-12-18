import Image from 'next/image'
import Info from './Info'

export default function AboutPage() {
  return (
    <div className='container max-w-[1400px] mx-auto py-14 px-5'>
      <div className='grid grid-cols-12 md:px-5 pt-4 md:pb-10 xs:text-justify md:text-left md:border-b md:border-gray-400 md:mb-10'>
        <h2 className='col-span-12 md:col-span-4 title-40 text-nowrap text-gray-600 xs:py-2'>
          About University
        </h2>
        <p className='text-16 text-gray-500 col-span-12 md:col-span-8 lg:col-span-7 md:border-l border-gray-400 md:pl-6'>
          Welcome to Bangladesh University, where knowledge meets inspiration,
          and every individuals educational journey is valued. Established in
          1971 Establishment, our university has been a bastion of learning,
          innovation and community for 51 years.
        </p>
      </div>
      <div className='w-full h-auto md:h-[500px] grid md:grid-cols-12 gap-y-8 gap-x-6 my-20'>
        <Image
          className='md:col-span-8 h-full object-cover'
          src='/images/about/about-banner.jpg'
          width={1000}
          height={1000}
          alt='About-Image'
        />
        <div className='md:col-span-4'>
          <Info />
        </div>
      </div>

      <div className='w-full grid xs:grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='w-full'>
          <Image
            className='w-full object-cover'
            src='/images/about/about-history.jpg'
            height={500}
            width={500}
            alt='About-Image'
          />
        </div>
        <div>
          <h2 className='text-30 pb-4 font-bold'>
            The History of Bangladesh University
          </h2>
          <p className='text-16 text-gray-600  text-justify'>
            Bangladesh University (BU) was established in 2001 under Private
            University Act, 1992 by Mr. Quazi Azher Ali, as a non-profit,
            non-political private university pioneering in computer-based
            education. It has been accredited by the Government of the Peoples
            Republic of Bangladesh. Its curricula as well as programs have been
            approved by the University Grants Commission (UGC) of Bangladesh. BU
            is approved by the Government of Bangladesh for awarding degrees in
            various disciplines. We are committed to excellence and innovation
            in pursuing applied knowledge through research and creative
            activities with the objectives of producing world-class
            professionals responsive to the needs of the Bangladeshi community
            and the world at large. BU started its academic session with 17
            students and 0.02 acres of space in 2001. Now BU can accommodate
            around 3400 students in its own aesthetic permanent campus. With 85
            full-time and 20 part-time faculty members and 110 administrative
            members, officials and staffs, our community continues to grow to
            cater to the needs of both the students and the nation as well.
          </p>
        </div>
      </div>

      <div className='text-16 text-gray-600 my-10'>
        <h3 className='text-24 text-secondary font-bold'>Location:</h3>
        <p className='leading-8'>
          The permanent campus is located at 5/B, Beribandh Main Road, Adabar,
          Mohammadpur, Dhaka which is well connected with other parts of Dhaka
          city.The permanent campus is having 1.7026 acres of land and it was
          inaugurated by Advocate Jahangir Kabir Nanak, MP and former Honurable
          State Minister for Local Govt., Rural Development and Co-operatives on
          October 18, 2011.
        </p>
        <h3 className='text-24 text-secondary mt-5 font-bold'>Founder:</h3>
        <p className='leading-8'>
          The President of the Peoples Republic of Bangladesh is the Chancellor
          of Bangladesh University (BU). He appointed Quazi Azher Ali, M.Sc.
          (DU), MPA (Harvard), the founder of BU as its Vice Chancellor.
          Virtually BU is the vivid imaginative conception of this noble soul.
          He held this position since its inception in October, 2001 till the
          day of his death on December 15, 2009. He had high academic
          achievement with long and varied experiences in national and
          international administration including Secretary to the Government of
          Bangladesh and Executive Director of Asian Development Bank (ADB). Mr.
          Ali agreed to accept taka one per month as salary considering the
          initial financial problems for a new noncommercial institution.
        </p>
      </div>
    </div>
  )
}
