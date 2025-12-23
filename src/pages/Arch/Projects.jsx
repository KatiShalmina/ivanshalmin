import { projects } from '../../data/projects/projects'
import ProjectCard from '../../components/ProjectCard'
import styles from './Projects.module.scss'

export default function Projects() {
  return (
    <div className={styles.projectsList}>
      {projects.map(pr => (
        <ProjectCard
          key={pr.slug}
          slug={pr.title}
          title={pr.title}
          year={pr.year}
          cover={pr.cover}
          index={pr.index}
          originalWidth={pr.originalWidth} 
        />
      ))}
    </div>
  )
}