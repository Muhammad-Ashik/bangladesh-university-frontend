export interface UpdatedNewsDataInterface {
  imageURL: string
  title: string
  link: string
  ButtonText: string
  date: string
  width: number
  height: number
}

export interface CarouselCardProps {
  data: UpdatedNewsDataInterface
  index: number
}
