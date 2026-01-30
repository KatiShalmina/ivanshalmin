import { pubCovers } from '../../data/publications/pub-covers'
import PubCard from '../../components/PubCard'
import styles from '../../components/PubCard.module.scss'

export default function Publications() {
  return (
    <div className={styles.pubCardsList}>
      {pubCovers.map(p => (
        <PubCard
          key={p.slug}
          to={`/architecture/publications/${p.slug}`}
          title={p.title}
          subtitle={p.subtitle}
          cover={p.cover}
        />
      ))}
    </div>
  )
}
