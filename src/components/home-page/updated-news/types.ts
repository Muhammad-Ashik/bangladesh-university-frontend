export interface UpdatedNewsDataInterface {
  imageURL: string
  title: string
  link: string
  ButtonText: string
  date: string
}

export interface UpdateNewsCardProps {
  data: UpdatedNewsDataInterface
  index: number
}
