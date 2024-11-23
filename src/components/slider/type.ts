import {IHighlightData} from '../highlight/types'
import {IUpdatedNewsData} from '../updated-news/types'

export interface SliderCardProps {
  data: IUpdatedNewsData | IHighlightData
  index: number
}

export interface SliderProps {
  data: (IUpdatedNewsData | IHighlightData)[]
}
