import {
  CoCurricularIcon,
  DigitalEducationIcon,
  LabFacilityIcon,
  LibraryIcon,
  ResearchIcon,
} from '@/assets/icons/Icons'

import React from 'react'

interface NavigationItem {
  title: string
  icon: React.FC
}

// Data Array
export const homeSubNavigationData: NavigationItem[] = [
  { title: 'Library', icon: LibraryIcon },
  { title: 'Lab Facility', icon: LabFacilityIcon },
  { title: 'Research', icon: ResearchIcon },
  { title: 'Education', icon: DigitalEducationIcon },
  { title: 'Co-curricular', icon: CoCurricularIcon },
]
