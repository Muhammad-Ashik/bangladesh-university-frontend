import Link from 'next/link'
import { RiArrowRightSLine } from 'react-icons/ri'

const VARIANT_STYLES = {
  primary: 'bg-red-700 hover:bg-red-800 text-white',
  secondary: 'bg-red-700 hover:bg-gray-800 text-white',
  outline:
    'border border-red-600 text-blue-600 hover:bg-blue-600 hover:text-white',
}

export default function Button({
  text = 'Read More',
  variant = 'primary',
  href = '#',
  icon = true,
  className = '',
}) {
  const buttonClasses = `flex items-center gap-1 px-6 py-2 transition-all ${VARIANT_STYLES[variant as keyof typeof VARIANT_STYLES]} ${className}`

  return (
    <Link href={href} className='inline-block'>
      <div className={buttonClasses}>
        <p className='text-sm whitespace-nowrap'>{text}</p>
        {icon && <RiArrowRightSLine size={20} />}
      </div>
    </Link>
  )
}
