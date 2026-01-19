import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Home.module.scss'

export default function Home() {
  const [activeBg, setActiveBg] = useState(null)
  const { pathname } = useLocation()

  const isRu =
    pathname === '/ru' ||
    pathname.startsWith('/ru/')

  const base = isRu ? '/ru' : ''

  const text = isRu
    ? {
        title: 'Иван Шалмин — архитектор и художник',
        architect: 'архитектор',
        artist: 'художник',
      }
    : {
        title: 'Ivan Shalmin — Architect and Artist',
        architect: 'architect',
        artist: 'artist',
      }

  return (
    <section
      className={`
        ${styles.hero} 
        ${activeBg ? styles.heroVisible : ''} 
        ${activeBg ? styles[`show_${activeBg}`] : ''}
      `}
    >
      <h1 className='visuallyHidden'>{text.title}</h1>
      <div className={styles.heroWrapper}>
        <Link
          to={`${base}/architecture/projects`}
          className={styles.heroLink}
          onMouseEnter={() => setActiveBg('architect')}
          onMouseLeave={() => setActiveBg(null)}
        >
          {text.architect}
        </Link>
        <Link
          to={`${base}/paintings/collections`}
          className={styles.heroLink}
          onMouseEnter={() => setActiveBg('artist')}
          onMouseLeave={() => setActiveBg(null)}
        >
          {text.artist}
        </Link>
      </div>
    </section>
  )
}
