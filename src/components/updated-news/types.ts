import {StaticImageData} from 'next/image'

export interface IUpdatedNewsData {
  imageURL: StaticImageData
  title: string
  link: string
  ButtonText: string
  date: string
}

export interface UpdatedNewsProps {
  data: IUpdatedNewsData
  index: number
}
