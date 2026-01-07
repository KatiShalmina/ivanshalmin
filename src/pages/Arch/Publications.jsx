import { publicationsList } from '../../data/publications/publications'
import Card from '../../components/Card'
import styles from '../../components/Card.module.scss'

export default function Publications() {
  return (
    <div className={styles.cardsList}>
      {publicationsList.map(p => (
        <Card
          key={p.slug}
          to={`/architecture/publications/${p.slug}`}
          title={p.title}
          // year={p.year}
          cover={p.cover}
        />
      ))}
    </div>
  )
}
