import { Link } from 'react-router-dom'
import styles from './MenuOverlay.module.scss'
import closeIcon from '../assets/icons/close.svg'

export default function MenuOverlay({ menuOpen, setMenuOpen }) {
  return (
    <div className={`${styles.overlay} ${menuOpen ? styles.open : ''}`}>
      <nav className={styles.nav}>
        <div className={styles.navUnit}>
          <h2 className={styles.navTitle}>architecture</h2>
          <ul className={styles.navList}>
            <li>
              <Link
                to='objects'
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >objects</Link>
            </li>
            <li>
              <Link
                to='laconism'
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >laconism</Link>
            </li>
            <li>
              <Link
                to='publications'
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >publications</Link>
            </li>
          </ul>
        </div>
        <div className={styles.navUnit}>
          <h2 className={styles.navTitle}>digital art</h2>
          <ul className={styles.navList}>
            <li>
              <Link
                to='paintings'
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >paintings</Link>
            </li>
            <li>
              <Link
                to='exhibitions'
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >exhibitions</Link>
            </li>
            <li>
              <Link
                to='video-art'
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >video art</Link>
            </li>
          </ul>
        </div>
        <div className={styles.navUnit}>
          <h2 className={styles.navTitle}>about</h2>
          <ul className={styles.navList}>
            <li>
              <Link
                to='bio'
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >bio</Link>
            </li>
            <li>
              <Link
                to='contacts'
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >contacts</Link>
            </li>
          </ul>
        </div>
      </nav>
      <button
        className={styles.closeButton}
        onClick={() => setMenuOpen(false)}
        aria-label='Close menu'
        type='button'
      >
        <img src={closeIcon} alt='' />
      </button>
    </div>
  )
}