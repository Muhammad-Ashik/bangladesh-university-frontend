import Image from 'next/image'

const SocialMediaLinks = ({ className = '' }) => {
  const links = [
    {
      href: 'https://www.facebook.com/BangladeshUniversityBd/',
      src: '/images/facebook.png',
      alt: 'Facebook',
      style: 'text-blue-600 hover:text-blue-700',
    },
    {
      href: 'https://twitter.com/bu_officialpage',
      src: '/images/twitter.png',
      alt: 'Twitter',
      style: 'text-blue-400 hover:text-blue-500',
    },
    {
      href: 'https://www.linkedin.com/school/bangladesh-university/',
      src: '/images/linkedin.png',
      alt: 'LinkedIn',
      style: 'text-blue-700 hover:text-blue-800',
    },
    {
      href: 'https://www.youtube.com/@BangladeshUniversityBd',
      src: '/images/youtube.png',
      alt: 'YouTube',
      style: 'text-red-600 hover:text-red-700',
    },
  ]

  return (
    <div className={`flex gap-8 ${className}`}>
      {links.map(({ href, src, alt, style }) => (
        <a
          key={alt}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className={`text-xl ${style}`}
        >
          <Image src={src} alt={alt} width={30} height={30} />
        </a>
      ))}
    </div>
  )
}

const Footer = () => {
  const contactInfo = [
    {
      title: 'Permanent Campus',
      address: '5/B, Beribandh Main Road, Adabar, Mohammadpur, Dhaka - 1207',
      phones: [],
      email: null,
    },
  ]

  return (
    <footer className='footer md:px-8 flex flex-col bg-[#191E24] text-[#9CA2B0]'>
      <div className='md:container mx-auto py-10 px-6 md:px-0 grid grid-cols-1 md:grid-cols-4 md:gap-8 gap-16 md:justify-items-center'>
        <div className='w-full'>
          <Image
            src='/images/logo.png'
            alt='Logo'
            width={100}
            height={100}
            className='grayscale hover:grayscale-0 transition duration-300 ease-in-out'
          />

          <p className='mt-4 text-sm'>
            We provide innovative educational solutions to help students grow
            and succeed in their academic journey.
          </p>
        </div>

        <div>
          <h1 className='text-2xl font-bold'>
            <span className='text-white'>Quick</span>{' '}
            <span className='text-red-500'>Links</span>
          </h1>
          <div className='flex flex-col gap-4 pt-4'>
            {['About Us', 'Programs', 'Admissions', 'Contact'].map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                className='link link-hover'
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className='md:col-span-2'>
          <h1 className='text-2xl font-bold'>
            <span className='text-white'>Contact</span>{' '}
            <span className='text-red-500'>Us</span>
          </h1>
          <div className='flex flex-col gap-6 pt-4'>
            <p className='text-sm'>
              Feel free to reach out to us with any questions or inquiries.
            </p>
            <div className='flex gap-8'>
              {contactInfo.map(({ title, address, email }) => (
                <div key={title}>
                  <div className='mb-2'>
                    <p className='font-semibold'>{title}</p>
                    {address && <p>{address}</p>}
                    {email && (
                      <a href={`mailto:${email}`} className='link link-hover'>
                        {email}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <SocialMediaLinks className='hidden md:flex' />
          </div>
          <SocialMediaLinks className='md:hidden justify-between mt-8' />
        </div>
      </div>
      <div className='w-full text-center text-slate-400 p-4 border-t border-slate-700'>
        <p className='text-sm w-full'>
          Copyright © {new Date().getFullYear()} All Rights Reserved by
          Bangladesh University
        </p>
      </div>
    </footer>
  )
}

export default Footer
