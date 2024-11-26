export interface UpdatedNewsDataInterface {
  videoUrl: string
  title: string
  link: string
  ButtonText: string
  date: string
  width: number
  height: number
}

export interface HighligthCardProps {
  data: UpdatedNewsDataInterface
  index: number
}
