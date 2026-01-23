import styles from './VideoArt.module.scss'
import Video from '../../components/Video'
import MoreButton from '../../components/MoreButton'
import useI18n from '../../hooks/useI18n'
import { videoArtContent } from '../../data/video-art'

export default function VideoArt() {
  const { isRu, lang } = useI18n()

  const content = videoArtContent?.[lang] ?? videoArtContent?.en

  const moreVideoArtLabel = isRu ? 'другие видео картины' : 'more video art'
  const moreSashaLabel = isRu ? 'другие сашины картины' : 'more sasha’s art'
  const mainTitleHidden = isRu ? 'Видео арт' : 'Video Art'

  const renderBlock = (block, key) => {
    if (block.type === 'p') return <p key={key}>{block.text}</p>

    if (block.type === 'highlight') {
      return <p key={key} className={styles.videoArtHighlight}>{block.text}</p>
    }
    return null
  }

  return (
    <section className={styles.videoArt}>
      <h1 className='visuallyHidden'>{mainTitleHidden}</h1>
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
        <MoreButton
          to='https://www.youtube.com/@sashashalmina'
          external
        >
          {moreVideoArtLabel}
        </MoreButton>
      </div>
      <div className={styles.videoArtText}>
        {content.blocks.map((block, i) => 
          renderBlock(block, `${block.type}-${i}`)
        )}
      </div>
      <MoreButton
        to='https://www.sashashalmina.com/'
        external
      >
        {moreSashaLabel}
      </MoreButton>
    </section>
  )
}
