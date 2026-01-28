import { useMemo } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import BuyButton from '../../components/BuyButton'
import styles from './PaintingDetail.module.scss'
import { PAINTINGS } from '../../data/paintings/paintings'
import { paintingDetail } from '../../data/paintings/painting-detail'
import MoreButton from '../../components/MoreButton'
import useI18n from '../../hooks/useI18n'
import PrevButton from '../../components/PrevButton'
import NextButton from '../../components/NextButton'

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
  const [searchParams] = useSearchParams()

  const painting = paintingDetail.find(p => p.slug === slug)

  if (!painting) return <p>Not found</p>

  const collections = painting.collections ?? []
  const primaryCollection = collections[0] ?? 'landscapes'

  const filterFromUrl = searchParams.get('filter')
  const filter = filterFromUrl ?? primaryCollection

  const list = useMemo(() => {
    if (filter === 'all') return PAINTINGS
    return PAINTINGS.filter(p => (p.collections ?? p.collectionscollections ?? []).includes(filter))
  }, [filter])

  const currentIndex = list.findIndex(p => p.slug === slug)
  const prev = currentIndex > 0 ? list[currentIndex - 1] : null
  const next = currentIndex >= 0 && currentIndex < list.length - 1 ? list[currentIndex + 1] : null

  const makeTo = (targetSlug) => `/paintings/collections/${targetSlug}?filter=${filter}`

  const backTo =
    primaryCollection === 'landscapes'
      ? '/paintings/collections'
      : `/paintings/collections?filter=${primaryCollection}`

  const backLabel =
    BACK_LABELS[primaryCollection]?.[lang]

  const tTitle = t(painting.title)
  const tDescription = t(painting.description)
  const tQuote = t(painting.quote)

  const prevLabel = isRu ? 'предыдущая картина' : 'previous painting'
  const nextLabel = isRu ? 'следующая картина' : 'next painting'
  const moreLabel = isRu ? 'смотреть анимацию' : 'view animation'
  const buyLabel = isRu ? 'купить картину' : 'buy this painting'

  return (
    <section className={styles.paintingDetail}>
      <BackButton to={backTo}>
        {backLabel}
      </BackButton>
      <div className={styles.prevNext}>
        {prev && (
          <PrevButton 
            to={makeTo(prev.slug)}
            className={styles.prevButton}
          >
            {prevLabel}
          </PrevButton>
        )}
        {next && (
          <NextButton 
            to={makeTo(next.slug)}
            className={styles.nextButton}
          >
            {nextLabel}
          </NextButton>
        )}
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
      <h1 className={styles.paintingTitle}>{tTitle}</h1>
      <div className={styles.paintingDescription}>
        {tDescription
          .trim()
          .split('\n')
          .map((line, i) => (
            <p key={i}>{line.trim()}</p>
          ))}
      </div>
      <div className={styles.paintingQuote}>
        {tQuote
          .trim()
          .split(/\n\s*\n/)
          .map((p, i) => (
            <p key={i}>{p.trim()}</p>
          ))}
      </div>
      <div className={styles.paintingVideoLink}>
        {painting.link && (
          <MoreButton to={painting.link}>
            {moreLabel}
          </MoreButton>
        )}
      </div>
      <BuyButton>{buyLabel}</BuyButton>
    </section>
  )
}
