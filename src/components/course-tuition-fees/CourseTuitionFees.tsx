import Image from 'next/image'

const CourseTuitionFees = () => {
  return (
    <div className='container max-w-[1300px] mx-auto py-14 px-3'>
      <h2 className='title-40 font-bold mb-10 text-primary text-center underline'>
        Undergraduate Programs
      </h2>
      <div className='w-full flex justify-center mb-5'>
        <Image
          src='/images/course-tuition-fees/course-tuition-fees-1.png'
          width={2000}
          height={1000}
          alt='calendar'
        />
      </div>
      <div className='w-full  mb-10 flex justify-center'>
        <Image
          src='/images/course-tuition-fees/course-tuition-fees-2.png'
          width={2000}
          height={1000}
          alt='calendar'
        />
      </div>
      <h2 className='title-40 font-bold mb-10 px-5 sm:px-0 text-primary text-center underline'>
        Graduate Programs
      </h2>
      <div className='w-full mb-10 flex justify-center'>
        <Image
          src='/images/course-tuition-fees/course-tuition-fees-3.png'
          width={2000}
          height={1000}
          alt='calendar'
        />
      </div>
    </div>
  )
}

export default CourseTuitionFees
