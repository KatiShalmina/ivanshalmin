import { Link } from 'react-router-dom'
import styles from './ObjectType.module.scss'

export default function ObjectType() {
  return (
    <section className={styles.objectType}>
      <Link 
        to='..'
        relative='path'
        className='back-button'
      >
        &larr; <span>back to objects</span>
      </Link>
      <h1>ObjectType</h1>
    </section>
  )
}