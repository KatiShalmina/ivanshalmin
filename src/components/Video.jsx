import { useState } from 'react'
import styles from './Video.module.scss'
import PlayButton from '../assets/icons/play.svg?react'

export default function Video({
  videoId,
  title,
  cover480,
  cover1024,
  coverOriginal,
}) {
  const [isPlaying, setIsPlaying] = useState(false)

  if (isPlaying) {
    return (
      <div className={styles.videoContainer}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className={styles.videoContainer}>
      <div
        className={styles.videoCover}
        onClick={() => setIsPlaying(true)}
        style={{
          '--cover480': `url(${cover480})`,
          '--cover1024': `url(${cover1024})`,
          '--coverOriginal': `url(${coverOriginal})`,
        }}
      >
        <div className={styles.videoOverlay}></div>
        <h3 className={styles.videoTitle}>{title}</h3>
        <button className={styles.playButton} type='button'>
          <PlayButton className={styles.playIcon} />
        </button>
      </div>
    </div>
  )
}