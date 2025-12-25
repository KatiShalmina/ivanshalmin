import { projects } from '../../data/projects/projects'
import Card from '../../components/Card'
import styles from '../../components/Card.module.scss'

export default function Projects() {
  return (
    <div className={styles.cardsList}>
      {projects.map(p => (
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
