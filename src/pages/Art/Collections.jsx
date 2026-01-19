import { useMemo } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { COLLECTIONS, COLLECTION_TEXT, PAINTINGS } from '../../data/paintings/paintings'
import Card from '../../components/Card'
import styles from './Collections.module.scss'
import BuyButton from '../../components/BuyButton'

export default function Collections() {
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()

  const filter = searchParams.get('filter') ?? 'all'

  const filteredPaintings = useMemo(() => {
    if (filter === 'all') return PAINTINGS
    return PAINTINGS.filter(p => p.collections.includes(filter))
  }, [filter])

  const setFilter = (next) => {
    if (next === 'all') {
      setSearchParams({}, { replace: true })
    } else {
      setSearchParams({ filter: next }, { replace: true })
    }
  }

  return (
    <section className={styles.collections}>
      <h1 className='visuallyHidden'>Collections</h1>
      <div>
        <ul className={styles.filterList}>
          {COLLECTIONS.map(c => (
            <li key={c.key}>
              <button
                type='button'
                onClick={() => setFilter(c.key)}
                aria-pressed={filter === c.key}
                className={styles.filterButton}
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.cardsList}>
        {filteredPaintings.map(p => (
          <Card
            key={p.slug}
            to={`/paintings/collections/${p.slug}`}
            title={p.title}
            cover={p.cover}
          />
        ))}
      </div>
      {filter !== 'all' && (
        <div className={styles.colTextWrapper}>
          <p className={styles.colTagline}>
            {COLLECTION_TEXT[filter]?.tagline}
          </p>
          <div className={styles.colText}>
            {COLLECTION_TEXT[filter]?.body
              .trim()
              .split(/\n\s*\n/)
              .map((paragraph, i) => (
                <p key={i}>
                  {paragraph.trim()}
                </p>
              ))}
          </div>
          <div className={styles.authorWrapper}>
            <p className={styles.authorName}><span >Kirill Svetlyakov,</span></p>
            <p>art expert and critic, responsible for the latest trends and developments at the Tretiyakov Art Gallery, Moscow, Russia</p>
          </div>
        </div>
      )}
      <BuyButton>buy a painting</BuyButton>
    </section>
  )
}
