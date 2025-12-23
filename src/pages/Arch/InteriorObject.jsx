import { useParams } from 'react-router-dom'
import GallerySwiper from '../../components/GallerySwiper'
import { interiors } from '../../data/publications/interiors/interiors'
import styles from './PublicationObject.module.scss'

export default function PublicationObject() {
  const { subslug } = useParams()
  const interior = interiors.find(int => int.subslug === subslug)

  if (!interior) return <p>Not found</p>

  return (
    <section className={styles.pub}>
      <h1 className={styles.pubTitle}>{interior.title}</h1>
      <div className={styles.pubSubtitle}>
        {interior.subtitle
          .trim()
          .split("\n")
          .map((line, i) => (
            <p key={i}>{line.trim()}</p>
          ))
        }
      </div>
      <p className={styles.pubTagline}>{interior.tagline}</p>
      <GallerySwiper
        key={subslug}
        slides={interior.slides}
      />
      <div className={styles.pubText}>
        {interior.text
          .trim()
          .split('\n\n')
          .map((paragraph, i) => (
            <p className={styles.pubParagraph} key={i}>{paragraph.trim()}</p>
          ))
        }
      </div>
      <div className={styles.pubAuthor}>
        {interior.author
          .trim()
          .split("\n")
          .map((line, i) => (
            <p key={i}>{line.trim()}</p>
          ))
        }
      </div>
      {interior.originalUrl && (
        <a
          href={interior.originalUrl}
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
