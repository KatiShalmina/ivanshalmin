import { useState, useMemo } from 'react'
import { COLLECTIONS, COLLECTION_TEXT, PAINTINGS } from '../../data/paintings/paintings'
import Card from '../../components/Card'
import styles from './Collections.module.scss'

export default function Collections() {
  const [filter, setFilter] = useState('landscapes')

  const filteredPaintings = useMemo(() => {
    if (filter === 'all') return PAINTINGS
    return PAINTINGS.filter(p => p.collections.includes(filter))
  }, [filter])

  return (
    <section className={styles.collections}>
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
            to={`/paintings/${p.slug}`}
            title={p.title}
            cover={p.cover}
          />
        ))}
      </div>
      {filter !== 'all' && (
        <div className={styles.collectionTextWrapper}>
          <p className={styles.collectionTagline}>
            {COLLECTION_TEXT[filter]?.tagline}
          </p>    
          <div className={styles.collectionText}>     
            {COLLECTION_TEXT[filter]?.body
              .trim()
              .split(/\n\s*\n/)
              .map((paragraph, i) => (
                <p key={i}>
                  {paragraph.trim()}
                </p>
              ))}
          </div>
          <p className={styles.textAuthor}>text: Kirill Svetliyakov, art expert and critic, responsible for the latest trends and developments at the Tretiyakov Art Gallery, Moscow, Russia.</p>
        </div>
      )}
    </section>
  )
}
