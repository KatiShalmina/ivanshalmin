import MoreButton from '../../components/MoreButton'
import Video from '../../components/Video'
import styles from './Exhibitions.module.scss'
import GallerySwiper from '../../components/GallerySwiper'
import useMediaQuery from '../../hooks/useMediaQuery'
import { cube } from '../../data/exhibitions/cube'
import { nsk } from '../../data/exhibitions/nsk'
import MobTabSlides from '../../components/MobTabSlides'

export default function Exhibitions() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  return (
    <section className={styles.exhibitions}>
      <h1 className='visuallyHidden'>Exhibitions</h1>
      <div className={styles.exhibitionUnit}>
        <h2 className={styles.exhibitionTitle}>Digital paintings or the seasonal fluctuations of an architect</h2>
        <p className={styles.subtitle}>first solo exhibition</p>
        <div className={styles.exhibitionDescription}>
          <p>date: 13.01.2020—01.02.2020</p>
          <p>location: CUBE Moscow Art centre</p>
          <p>curator: Kirill Svetlyakov</p>
        </div>
        {isDesktop ? (
          <GallerySwiper slides={cube.slides} />
        ) : (
          <MobTabSlides slides={cube.slides} />
        )}
        <MoreButton to='/paintings/exhibitions/cube-photos'>more photos</MoreButton>
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
        </div>
      </div>
      <div className={styles.exhibitionUnit}>
        <h2 className={styles.exhibitionTitle}>Laconism in architecture, paintings without paint</h2>
        <p className={styles.subtitle}>second solo exhibition</p>
        <div className={styles.exhibitionDescription}>
          <p>date: 07.03.2020—22.03.2020</p>
          <p>location: White Gallery, Novosibirsk</p>
          <p>date: 07.03.2020—21.03.2020</p>
          <p>location: Cultural Centre TsK 19, Novosibirsk</p>
        </div>
        {isDesktop ? (
          <GallerySwiper slides={nsk.slides} />
        ) : (
          <MobTabSlides slides={nsk.slides} />
        )}
      </div>
      <div className={styles.videoWrapper}>
        <Video
          videoId='iheO9xoTCdc'
          coverOriginal='/images/video-covers/original/novosibirsk.webp'
          cover1024='/images/video-covers/1024/novosibirsk1024.webp'
          cover480='/images/video-covers/480/novosibirsk480.webp'
        />
      </div>
    </section >
  )
}
