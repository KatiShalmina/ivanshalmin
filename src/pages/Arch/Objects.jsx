import { objects } from '../../data/objects/objects'
import ObjectCard from '../../components/ObjectCard'
import styles from './Objects.module.scss'

export default function Objects() {
  return (
    <div className={styles.objectsList}>
      {objects.map(obj => (
        <ObjectCard
          key={obj.slug}
          slug={obj.title}
          title={obj.title}
          year={obj.year}
          cover={obj.cover}
          index={obj.index}
          originalWidth={obj.originalWidth} 
        />
      ))}
    </div>
  )
}