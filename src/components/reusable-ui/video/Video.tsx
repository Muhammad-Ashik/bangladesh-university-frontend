export default function Video({ src }: { src: string }) {
  console.log(src)
  return (
    <div className='h-full w-full'>
      <video width='800' height='400' controls>
        <source
          src={
            'https://videos.pexels.com/video-files/1422633/1422633-hd_1920_810_24fps.mp4'
          }
          type='video/mp4'
        />
        <track src='' kind='subtitles' srcLang='en' label='English' />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
