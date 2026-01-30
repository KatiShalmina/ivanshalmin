import { useParams } from 'react-router-dom'
import MoreButton from '../../components/MoreButton'
import Video from '../../components/Video'
import styles from './ExhibitionDetail.module.scss'
import GallerySwiper from '../../components/GallerySwiper'
import useMediaQuery from '../../hooks/useMediaQuery'
import MobTabSlides from '../../components/MobTabSlides'
import useI18n from '../../hooks/useI18n'
import { EXHIBITION_DETAIL, EXHIBITION_SLIDES } from '../../data/exhibitions/exhibitions'
import BackButton from '../../components/BackButton'

export default function ExhibitionDetail() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const { t, isRu } = useI18n()
  const { slug } = useParams()

  const exh = EXHIBITION_DETAIL[slug]
  const slides = EXHIBITION_SLIDES[slug] ?? []

  if (!exh) return null

  const tTitle = t(exh.title)
  const tSubtitle = t(exh.subtitle)
  const tDescription = t(exh.description)

  const moreLabel = isRu ? 'смотреть фотоотчет' : 'more photos'
  const backLabel = isRu ? 'все выставки' : 'all exhibitions'

  return (
    <section className={styles.exhDetail}>
      <BackButton to='/paintings/exhibitions'>
        {backLabel}
      </BackButton>
      <h2 className={styles.exhDetTitle}>{tTitle}</h2>
      <p className={styles.exhDetSubtitle}>{tSubtitle}</p>
      <div className={styles.exhDetDescription}>
        {tDescription
          .trim()
          .split('\n')
          .map((line, i) => (
            <p key={i}>{line.trim()}</p>
          ))}
      </div>
      <div className={styles.exhDetSlides}>
        {isDesktop ? (
          <GallerySwiper slides={slides} />
        ) : (
          <MobTabSlides slides={slides} />
        )}
        <MoreButton to={`/paintings/exhibitions/${slug}/photos`}>
          {moreLabel}
        </MoreButton>
      </div>
      <div className={styles.videoWrapper}>
        {exh.videos.map(v => (
          <Video
            key={v.id}
            videoId={v.id}
            coverOriginal={v.coverOriginal}
            cover1024={v.cover1024}
            cover480={v.cover480}
          />
        ))}
      </div>
    </section>
  )
}