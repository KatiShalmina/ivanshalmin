import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.scss'

export default function Home() {
  const [activeBg, setActiveBg] = useState(null)

  const backgrounds = {
    architect: '/images/objects/propylaeum/original/propylaeum-4.webp',
    artist: '/images/paintings/desktop/splash.jpg'
  }

  const bgUrl = activeBg ? backgrounds[activeBg] : null

  return (
    <section className={styles.hero}>
      <div className={styles.heroWrapper}>
        <h1 className='visuallyHidden'>Ivan Shalmin — Architect and Artist</h1>
        <Link
          to='objects'
          className={styles.heroLink}
          onMouseEnter={() => setActiveBg('architect')}
          onMouseLeave={() => setActiveBg(null)}
        >
          architect
        </Link>
        <Link
          to='paintings'
          className={styles.heroLink}
          onMouseEnter={() => setActiveBg('artist')}
          onMouseLeave={() => setActiveBg(null)}
        >
          artist
        </Link>
      </div>
      <div
          className={`${styles.heroBackground} ${
            bgUrl ? styles.heroBackgroundVisible : ''
          }`}
          style={bgUrl ? { backgroundImage: `url(${bgUrl})` } : {}}
          aria-hidden='true'
        />
    </section>
  )
}
