export default function Video({ src }: { src: string }) {
  return (
    <video width='600' height='400'>
      <source
        src={
          src ||
          'https://videos.pexels.com/video-files/1422633/1422633-hd_1920_810_24fps.mp4'
        }
        type='video/mp4'
      />
      <track src='' kind='subtitles' srcLang='en' label='English' />
      Your browser does not support the video tag.
    </video>
  )
}
