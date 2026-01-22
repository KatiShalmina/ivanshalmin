import { useParams } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import BuyButton from '../../components/BuyButton'
import styles from './PaintingDetail.module.scss'
import { paintingDetail } from '../../data/paintings/painting-detail'
import MoreButton from '../../components/MoreButton'
import useI18n from '../../hooks/useI18n'

const BACK_LABELS = {
  landscapes: { en: 'all landscapes', ru: 'все пейзажи' },
  psychedelics: { en: 'all psychedelics', ru: 'вся психоделика' },
  portraits: { en: 'all portraits', ru: 'все портреты' },
  stillLife: { en: 'all still life', ru: 'все натюрморты' },
  structures: { en: 'all structures', ru: 'все структуры' },
}

export default function PaintingDetail() {
  const { t, isRu, lang } = useI18n()

  const { slug } = useParams()

  const painting = paintingDetail.find(p => p.slug === slug)

  if (!painting) return <p>Not found</p>

  const collections = painting.collections ?? []
  const primaryCollection = collections[0] ?? 'landscapes'

  const backTo =
    primaryCollection === 'landscapes'
      ? '/paintings/collections'
      : `/paintings/collections?filter=${primaryCollection}`

  const backLabel =
    BACK_LABELS[primaryCollection]?.[lang]

  const tTitle = t(painting.title)
  const tDescription = t(painting.description)
  const tQuote = t(painting.quote)

  const moreLabel = isRu ? 'смотреть анимацию' : 'view painting in motion'
  const buyLabel = isRu ? 'купить картину' : 'buy this painting'
  const cite = isRu ? 'Иван Шалмин' : 'Ivan Shalmin'

  return (
    <section className={styles.paintingDetail}>
      <BackButton to={backTo}>
        {backLabel}
      </BackButton>
      <h1 className={styles.paintingTitle}>{tTitle}</h1>
      <div className={styles.paintingDescription}>
        {tDescription
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
        {tQuote
          .trim()
          .split(/\n\s*\n/)
          .map((p, i) => (
            <p key={i}>{p.trim()}</p>
          ))}
        <cite>{cite}</cite>
      </blockquote>
      <BuyButton>{buyLabel}</BuyButton>
      <div className={styles.paintingVideoLink}>
        {painting.link && (
          <MoreButton to={painting.link}>
            {moreLabel}
          </MoreButton>
        )}
      </div>
    </section>
  )
}
