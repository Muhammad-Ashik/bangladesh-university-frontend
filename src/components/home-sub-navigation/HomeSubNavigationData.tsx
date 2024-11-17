import {ReactElement} from 'react'
import {
  CoCurricularIcon,
  DigitalEducationIcon,
  LabFacilityIcon,
  LibraryIcon,
  ResearchIcon,
} from './HomeSubNavigationIcons'

interface NavigationItem {
  title: string
  icon: ReactElement // Ensures the icons are valid React elements
}

// Data Array
export const HomeSubNavigationData: NavigationItem[] = [
  {title: 'Library', icon: <LibraryIcon />},
  {title: 'Lab Facility', icon: <LabFacilityIcon />},
  {title: 'Research', icon: <ResearchIcon />},
  {title: 'Education', icon: <DigitalEducationIcon />},
  {title: 'Co-curricular', icon: <CoCurricularIcon />},
]
