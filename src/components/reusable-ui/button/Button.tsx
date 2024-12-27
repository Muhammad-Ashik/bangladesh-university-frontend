import Link from 'next/link'
import { ReactNode } from 'react'
import { IconType } from 'react-icons'

type ButtonProps = {
  text?: string
  variant?: 'fill' | 'outline' | 'flat'
  href?: string
  icon?: IconType
  className?: string
  onClick?: () => void
  children?: ReactNode
}

const VARIANT_STYLES = {
  fill: 'bg-red-700 hover:bg-red-800 text-white',
  outline:
    'border border-red-700 text-red-700 hover:bg-red-800 hover:text-white',
  flat: 'text-red-700 hover:text-red-800',
}

export default function Button({
  text = 'Read More',
  variant = 'fill',
  href = '#',
  className = '',
  onClick,
  children,
}: ButtonProps) {
  const buttonClasses = `flex items-center gap-1 px-6 py-2 transition-all ${VARIANT_STYLES[variant]} ${className}`

  return (
    <Link href={href} className='inline-block' onClick={onClick}>
      <div className={buttonClasses}>
        <p className='text-14 whitespace-nowrap'>{children || text}</p>
      </div>
    </Link>
  )
}
