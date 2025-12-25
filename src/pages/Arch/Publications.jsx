import { publications } from '../../data/publications/publications'
import Card from '../../components/Card'
import styles from '../../components/Card.module.scss'

export default function Publications() {
  return (
    <div className={styles.cardsList}>
      {publications.map(p => (
        <Card
          key={p.slug}
          slug={p.slug}
          year={p.year}
          originalWidth={p.originalWidth}
        />
      ))}
    </div>
  )
}
