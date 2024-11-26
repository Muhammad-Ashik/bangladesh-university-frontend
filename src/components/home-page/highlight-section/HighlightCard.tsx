import Video from '@/components/reusable-ui/video/Video'
import { HighligthCardProps } from './types'

export default function HighlightCard({ data, index }: HighligthCardProps) {
  return (
    <div className='flex flex-wrap justify-center gap-5 mx-3 mt-3 mb-5'>
      <div className='shadow-lg' key={index}>
        <Video src={data.videoUrl} />
      </div>
    </div>
  )
}
