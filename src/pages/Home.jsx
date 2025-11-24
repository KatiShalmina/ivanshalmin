import styles from './Home.module.scss'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroWrapper}>
        <h1 className='visually-hidden'>Ivan Shalmin — Architect and Artist</h1>
        <Link to='objects' className={styles.heroLink}>architect</Link>
        <Link to='paintings' className={styles.heroLink}>artist</Link>
      </div>
    </section>
  )
}