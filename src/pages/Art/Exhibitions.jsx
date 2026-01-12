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
      <div className={styles.exhUnit}>
        <div className={styles.exhUnitWrapper}>
          <p className={styles.exhSubtitle}>first solo exhibition</p>
          <h2 className={styles.exhTitle}>digital paintings or the seasonal fluctuations of an architect</h2>
          <div className={styles.exhDescription}>
            <p>13.01.2020—01.02.2020</p>
            <p>location: CUBE Moscow Art centre</p>
            <p>curator: Kirill Svetlyakov</p>
          </div>
          {isDesktop ? (
            <GallerySwiper slides={cube.slides} />
          ) : (
            <MobTabSlides slides={cube.slides} />
          )}
          <MoreButton to='/paintings/exhibitions/cube'>more photos</MoreButton>
        </div>
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
      <div className={styles.exhUnit}>
        <div className={styles.exhUnitWrapper}>
          <p className={styles.exhSubtitle}>second solo exhibition</p>
          <h2 className={styles.exhTitle}>laconism in architecture, paintings without paint</h2>
          <div className={styles.exhDescription}>
            <p>06.03.2020—22.03.2020</p>
            <p>locations: White Gallery and Cultural Centre <span className='nowrap'>TsK 19</span>, Novosibirsk</p>
          </div>
          {isDesktop ? (
            <GallerySwiper slides={nsk.slides} />
          ) : (
            <MobTabSlides slides={nsk.slides} />
          )}
          <MoreButton to='/paintings/exhibitions/nsk'>more photos</MoreButton>
        </div>
        <div className={styles.videoWrapper}>
          <Video
            videoId='iheO9xoTCdc'
            coverOriginal='/images/video-covers/original/novosibirsk.webp'
            cover1024='/images/video-covers/1024/novosibirsk1024.webp'
            cover480='/images/video-covers/480/novosibirsk480.webp'
          />
        </div>
      </div>
      <div className={styles.exhUnit}>
        <div className={styles.exhUnitWrapper}>
          <h2 className={styles.exhTitle}>the paper architecture movement</h2>
          <div className={styles.exhDescription}>
            <p>2017: Paris, Tallin, Berlin</p>
            <p>2015: Moscow</p>
            <p>2000: Moscow</p>
            <p>1992: Jerusalem</p>
            <p>1990—1991: New Orleans</p>
            <p>1990: Cologne, Berlin, Brussels, Zurich</p>
            <p>1989: Moscow, Frankfurt</p>
            <p>1988: Paris, Milan, Austin, London</p>
            <p>1987: Moscow</p>
            <p>1996—2000: Rotterdam</p>
            <p>1986: Ljubljana, Helsinki, Stockholm, Amsterdam</p>
            <p>1985: Moscow</p>
            <p>1984: Moscow</p>
          </div>
          <a
            href="/pdf/paper-architecture-catalogue.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.exhPdfLink}
          >
            paper architecture full catalogue
          </a>
        </div>
      </div>
    </section >
  )
}
