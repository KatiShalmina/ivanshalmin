import Video from '../../components/Video'
import styles from './Exhibitions.module.scss'

export default function Exhibitions() {
  return (
    <section className={styles.exhibitions}>
      <div className={styles.videoWrapper}>
        <Video
          videoId='zBI22kyMwNY'          
          coverOriginal='/images/video-covers/original/cube-1.webp'
          cover1024='/images/video-covers/1024/cube1024-1.webp'
          cover480='/images/video-covers/480/cube480-1.webp'
        />
        <Video
          videoId='AiCg08FO8AY'          
          coverOriginal='/images/video-covers/original/cube-2.webp'
          cover1024='/images/video-covers/1024/cube1024-2.webp'
          cover480='/images/video-covers/480/cube480-2.webp'
        />
        <Video
          videoId='iheO9xoTCdc'      
          coverOriginal='/images/video-covers/original/novosibirsk.webp'
          cover1024='/images/video-covers/1024/novosibirsk1024.webp'
          cover480='/images/video-covers/480/novosibirsk480.webp'
        />
        <Video
          videoId='tr66ctBXim0'
          coverOriginal='/images/video-covers/original/architecture.webp'
          cover1024='/images/video-covers/1024/architecture1024.webp'
          cover480='/images/video-covers/480/architecture480.webp'
        />
      </div>
    </section>
  )
}
