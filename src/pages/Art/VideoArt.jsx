import styles from './VideoArt.module.scss'
import Video from '../../components/Video'
import MoreButton from '../../components/MoreButton'

export default function VideoArt() {
  return (
    <section className={styles.videoArt}>
      <h1 className='visuallyHidden'>Video Art</h1>
      <div className={styles.videoWrapper}>
        <Video
          videoId='JMBw_RcDbEQ'
          coverOriginal='/images/video-covers/video-art/original/ship.webp'
          cover1024='/images/video-covers/video-art/1024/ship.webp'
          cover480='/images/video-covers/video-art/480/ship.webp'
        />
        <Video
          videoId='OC0T951qrtI'
          coverOriginal='/images/paintings/original/dusk.webp'
          cover1024='/images/paintings/1024/dusk.webp'
          cover480='/images/paintings/480/dusk.webp'
        />
        <Video
          videoId='3fGxLXT1a6Y'
          coverOriginal='/images/paintings/original/demons.webp'
          cover1024='/images/paintings/1024/demons.webp'
          cover480='/images/paintings/480/demons.webp'
        />
        <Video
          videoId='QTTmEaZZlrI'
          coverOriginal='/images/paintings/original/race.webp'
          cover1024='/images/paintings/1024/race.webp'
          cover480='/images/paintings/480/race.webp'
        />
        <Video
          videoId='FNTpDKkcKew'
          coverOriginal='/images/paintings/original/contact.webp'
          cover1024='/images/paintings/1024/contact.webp'
          cover480='/images/paintings/480/contact.webp'
        />
        <Video
          videoId='-NZLgXOv5n0'
          coverOriginal='/images/paintings/original/at-6-am.webp'
          cover1024='/images/paintings/1024/at-6-am.webp'
          cover480='/images/paintings/480/at-6-am.webp'
        />
         <MoreButton to='https://www.youtube.com/@sashashalmina'>more video art</MoreButton>
      </div>
      <div className={styles.videoArtText}>
        <p>Ivan Shalmin’s daughter, Sasha—an artist and graphic designer—was deeply influenced by his digital abstract paintings. She was drawn to their emotive, hidden imagery and to the strong sense of movement embedded within works that were, materially, static. Motivated by this tension, she began experimenting with animation and sound, extending his paintings into short moving-image works that brought their internal rhythms and implied motion to the surface.</p>
        <p>Ivan immediately recognised the conceptual and experiential potential of this dialogue between stillness and motion, and chose to exhibit the animated works alongside his original canvases at art fairs in London (2021), and in Amsterdam and Paris (2022). Audience responses consistently highlighted how the addition of movement and sound intensified the emotional resonance of the originals, enabling a deeper engagement with the imagery.</p>
        <p>Building on this exploration, Sasha and Ivan began developing plans for an immersive VR-based video installation, conceived as a fully embodied extension of his practice. The project was never realised following Ivan’s passing in 2022.</p>
      </div>
      <MoreButton to='https://www.sashashalmina.com/'>more sasha’s art</MoreButton>
    </section>
  )
}