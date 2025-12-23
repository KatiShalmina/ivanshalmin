import { useParams } from 'react-router-dom'
import GallerySwiper from '../../components/GallerySwiper'
import { publications } from '../../data/publications/publications'
import styles from './PublicationObject.module.scss'
import PublicationText from '../../components/PublicationText'

export default function PublicationObject() {
  const { slug } = useParams()
  const pub = publications.find(p => p.slug === slug)

  if (!pub) return <p>Not found</p>

  return (
    <section className={styles.pub}>
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
      <GallerySwiper
        key={slug}
        slides={pub.slides}
      />
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
