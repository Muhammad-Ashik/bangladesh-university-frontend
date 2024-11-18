import Image from 'next/image'
import Button from '../button/Button'

export default function WelcomeSection() {
  return (
    <div className='md:container sm:px-8 mx-auto'>
      <div className='w-full block lg:grid grid-cols-2 xl:grid-cols-3 gap-12 xs:px-5 md:px-8 '>
        <div className='w-full xs:mb-10 lg:mb-0'>
          <Image
            className='w-full h-full object-cover'
            src='/images/image-2.png'
            width={1000}
            height={1000}
            alt='Welcome-Image'
          />
        </div>
        <div className='flex flex-col xl:col-span-2 gap-4'>
          <h4 className='text-xs text-primary'>knowledge meets innovation</h4>
          <h2 className='md:text-3xl xs:text-xl font-bold text-secondary'>
            Welcome To Bangladesh University
          </h2>
          <p className='xl:text-lg leading-8 text-secondary'>
            Bangladesh University (BU) started its journey in 2001. Since then
            it has been providing quality higher education at a minimum cost
            especially for the financially underprivileged. For more than a
            decade, BU has been increasing and nurturing talent within the youth
            with modern knowledge and technology. With the international
            affiliations, BU aims at making its students capable and ethical
            leaders to lead and represent our nation around the world. Under the
            Private University Act (1992), BU has been approved by the
            Government of the Peoples Republic of Bangladesh. The University
            maintains close collaboration with the University Grants Commission
            (UGC) including several American, British, Netherlands and other
            universities across the globe with its noble vision and mission
            since 2001. Bangladesh University strives to attain perfection in
            its efforts to educate the youth of Bangladesh.
          </p>
          <Button />
        </div>
      </div>
    </div>
  )
}
