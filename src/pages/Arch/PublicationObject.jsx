import { useParams } from 'react-router-dom'
import GallerySwiper from '../../components/GallerySwiper'
import { pubObjects } from '../../data/publications/pub-objects'
import styles from './PublicationObject.module.scss'
import PublicationText from '../../components/PublicationText'
import useMediaQuery from '../../hooks/useMediaQuery'
import MobTabSlides from '../../components/MobTabSlides'
import BackButton from '../../components/BackButton'

export default function PublicationObject() {
  const { slug } = useParams()
  const pub = pubObjects.find(p => p.slug === slug)

  const isDesktop = useMediaQuery('(min-width: 1024px)')

  if (!pub) return <p>Not found</p>

  return (
    <section className={styles.pub}>
      <BackButton>all publications</BackButton>
      <h1 className={styles.pubTitle}>{pub.title}</h1>
      <div className={styles.pubSubtitle}>
        {pub.subtitle
          .trim()
          .split("\n")
          .map((line, i) => (
            <p key={i}>{line.trim()}</p>
          ))
        }
      </div>
      <p className={styles.pubTagline}>{pub.tagline}</p>
      {isDesktop ? (
        <GallerySwiper key={slug} slides={pub.slides} />
      ) : (
        <MobTabSlides key={slug} slides={pub.slides} />
      )}
      {slug === 'paper' && (
        <a
          href="/pdf/paper-architecture-catalogue.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.pubPdfLink}
        >
          paper architecture full catalogue
        </a>
      )}
      <PublicationText text={pub.text} />
      <div className={styles.pubAuthor}>
        {pub.author
          .trim()
          .split("\n")
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
          original publication
        </a>
      )}
    </section>
  )
}
