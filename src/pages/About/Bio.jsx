import Video from '../../components/Video'
import styles from './Bio.module.scss'

export default function Bio() {
  return (
    <section className={styles.bio}>
      <Video
        videoId='uWJyeehJ29Y'
        coverOriginal='/images/video-covers/original/ivanshalmin.webp'
        cover1024='/images/video-covers/1024/ivanshalmin1024.webp'
        cover480='/images/video-covers/480/ivanshalmin480.webp'
      />
    </section>
  )
}
