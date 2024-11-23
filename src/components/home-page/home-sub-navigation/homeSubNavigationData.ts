import React from 'react'
import { ImLab } from 'react-icons/im'
import { LuBookCopy, LuFileSearch } from 'react-icons/lu'
import { MdCastForEducation } from 'react-icons/md'
import { RiGraduationCapLine } from 'react-icons/ri'

interface NavigationItem {
  title: string
  icon: React.ComponentType<{ className?: string }>
}

// Data Array
export const homeSubNavigationData: NavigationItem[] = [
  { title: 'Library', icon: LuBookCopy },
  { title: 'Lab Facility', icon: ImLab },
  { title: 'Research', icon: LuFileSearch },
  { title: 'Education', icon: RiGraduationCapLine },
  { title: 'Co-curricular', icon: MdCastForEducation },
]
