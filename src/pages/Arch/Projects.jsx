import { projects } from '../../data/projects/projects'
import Card from '../../components/Card'
import styles from '../../components/Card.module.scss'

export default function Projects() {
  return (
    <div className={styles.cardsList}>
      {projects.map(p => (
        <Card
          key={p.slug}
          to={`/architecture/projects/${p.slug}`}
          title={p.title}
          cover={p.cover}
        />
      ))}
    </div>
  )
}
