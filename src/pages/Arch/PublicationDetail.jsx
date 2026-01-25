import { useParams } from 'react-router-dom'
import GallerySwiper from '../../components/GallerySwiper'
import { pubs } from '../../data/publications/publications'
import styles from './PublicationDetail.module.scss'
import PublicationText from '../../components/PublicationText'
import useMediaQuery from '../../hooks/useMediaQuery'
import MobTabSlides from '../../components/MobTabSlides'
import BackButton from '../../components/BackButton'
import useI18n from '../../hooks/useI18n'

export default function PublicationDetail() {
  const { t, isRu } = useI18n()

  const { slug } = useParams()
  const pub = pubs.find(p => p.slug === slug)

  const isDesktop = useMediaQuery('(min-width: 1024px)')

  if (!pub) return <p>Not found</p>

  const tTitle = t(pub.title)
  const tSubtitle = t(pub.subtitle)
  const tTagline = t(pub.tagline)
  const tText = t(pub.text)
  const tAuthor = t(pub.author)

  const originalLabel = isRu ? 'оригинал' : 'original publication'
  const backLabel = isRu ? 'все публикации' : 'all publications'
  const paperCatalog = isRu ? 'полный бумажный каталог' : 'full paper catalogue'

  return (
    <section className={styles.pub}>
      <BackButton to='/architecture/publications'>
        {backLabel}        
      </BackButton>
      <h1 className={styles.pubTitle}>{tTitle}</h1>
      <div className={styles.pubSubtitle}>
        {tSubtitle
          .trim()
          .split('\n')
          .map((line, i) => (
            <p key={i}>{line.trim()}</p>
          ))
        }
      </div>
      <p className={styles.pubTagline}>{tTagline}</p>
      {isDesktop ? (
        <GallerySwiper key={slug} slides={pub.slides} />
      ) : (
        <MobTabSlides key={slug} slides={pub.slides} />
      )}
      {slug === 'paper' && (
        <a
          href='/pdf/paper-architecture-catalogue.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.pubPdfLink}
        >
          {paperCatalog}
        </a>
      )}
      <PublicationText text={tText} />
      <div className={styles.pubAuthor}>
        {tAuthor
          .trim()
          .split('\n')
          .map((line, i) => (
            <p key={i}>{line.trim()}</p>
          ))
        }
      </div>
      {pub.originalUrl && (
        <a
          href={pub.originalUrl}
          target='_blank'
          rel='noopener noreferrer'
          className={styles.pubOriginalLink}
        >
          {originalLabel}
        </a>
      )}
    </section>
  )
}
