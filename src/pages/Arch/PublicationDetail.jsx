import { useParams, useLocation } from 'react-router-dom'
import GallerySwiper from '../../components/GallerySwiper'
import { pubs } from '../../data/publications/publications'
import styles from './PublicationDetail.module.scss'
import PublicationText from '../../components/PublicationText'
import useMediaQuery from '../../hooks/useMediaQuery'
import MobTabSlides from '../../components/MobTabSlides'
import BackButton from '../../components/BackButton'

export default function PublicationDetail() {
  const { pathname } = useLocation()

  const isRu =
    pathname === '/ru' ||
    pathname.startsWith('/ru/')

  const { slug } = useParams()
  const pub = pubs.find(p => p.slug === slug)

  const isDesktop = useMediaQuery('(min-width: 1024px)')

  if (!pub) return <p>Not found</p>

  const pick = value =>
    typeof value === 'string'
      ? value
      : value?.[isRu ? 'ru' : 'en'] ?? value?.en ?? ''

  const pTitle = pick(pub.title)
  const pSubtitle = pick(pub.subtitle)
  const pTagline = pick(pub.tagline)
  const pText = pick(pub.text)
  const pAuthor = pick(pub.author)

  const originalLabel = isRu ? 'оригинал' : 'original publication'
  const backLabel = isRu ? 'все публикации' : 'all publications'
  const paperCatalog = isRu ? 'полный каталог бумажной архитектуры' : 'paper architecture full catalogue'

  return (
    <section className={styles.pub}>
      <BackButton>{backLabel}</BackButton>
      <h1 className={styles.pubTitle}>{pTitle}</h1>
      <div className={styles.pubSubtitle}>
        {pSubtitle
          .trim()
          .split('\n')
          .map((line, i) => (
            <p key={i}>{line.trim()}</p>
          ))
        }
      </div>
      <p className={styles.pubTagline}>{pTagline}</p>
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
      <PublicationText text={pText} />
      <div className={styles.pubAuthor}>
        {pAuthor
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
