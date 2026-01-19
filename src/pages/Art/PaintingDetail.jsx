import { useParams, useLocation } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import BuyButton from '../../components/BuyButton'
import styles from './PaintingDetail.module.scss'
import { paintingDetail } from '../../data/paintings/painting-detail'
import MoreButton from '../../components/MoreButton'

export default function PaintingDetail() {
  const { slug } = useParams()
  const location = useLocation()

  const painting = paintingDetail.find(p => p.slug === slug)

  if (!painting) return <p>Not found</p>

  return (
    <section className={styles.paintingDetail}>
      <BackButton
        to='/paintings/collections'
      >
        all collections
      </BackButton>
      <h1 className={styles.paintingTitle}>{painting.title}</h1>
      <div className={styles.paintingDescription}>
        {painting.description
          .trim()
          .split('\n')
          .map((line, i) => (
            <p key={i}>{line.trim()}</p>
          ))}
      </div>
      <div className={styles.paintingPicture}>
        <picture key={painting.slug}>
          <source
            srcSet={painting.srcSet}
            sizes='100vw'
          />
          <img
            src={painting.src}
            alt={painting.title}
            className={styles.paintingImage}
            loading='lazy'
            decoding='async'
          />
        </picture>
      </div>
      <blockquote className={styles.paintingQuote}>
        {painting.quote
          .trim()
          .split(/\n\s*\n/)
          .map((p, i) => (
            <p key={i}>{p.trim()}</p>
          ))}
        <cite>Ivan Shalmin</cite>
      </blockquote>
      <p className={styles.paintingWarning}>*The final artwork is delivered in high resolution, suitable for large-format printing or digital use.
      </p>
      <BuyButton>buy this painting</BuyButton>
      <div className={styles.paintingVideoLink}>
        {painting.link && (
          <MoreButton
            to={painting.link}
            external
          >
            view painting in motion
          </MoreButton>
        )}
      </div>
    </section>
  )
}
