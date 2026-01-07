import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.scss'

export default function Home() {
  const [activeBg, setActiveBg] = useState(null)

  return (
    <section 
      className={`
        ${styles.hero} 
        ${activeBg ? styles.heroVisible : ''} 
        ${activeBg ? styles[`show_${activeBg}`] : ''}
      `}
    >
      <h1 className='visuallyHidden'>Ivan Shalmin — Architect and Artist</h1>
      <div className={styles.heroWrapper}>
        <Link
          to='/architecture/projects'
          className={styles.heroLink}
          onMouseEnter={() => setActiveBg('architect')}
          onMouseLeave={() => setActiveBg(null)}
        >
          architect
        </Link>
        <Link
          to='/paintings/collections'
          className={styles.heroLink}
          onMouseEnter={() => setActiveBg('artist')}
          onMouseLeave={() => setActiveBg(null)}
        >
          artist
        </Link>
      </div>
    </section>
  )
}
