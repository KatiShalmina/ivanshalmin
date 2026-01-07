import { Link } from 'react-router-dom'
import styles from './MenuOverlay.module.scss'
import closeIcon from '../assets/icons/close.svg'

export default function MenuOverlay({ menuOpen, setMenuOpen }) {
  return (
    <div className={`${styles.overlay} ${menuOpen ? styles.open : ''}`}>
      <nav className={styles.overlayNav}>
        <div className={styles.overlayNavUnit}>
          <Link
            to='/architecture'
            className={styles.overlayMainLink}
            onClick={() => setMenuOpen(false)}>            
            architecture
          </Link>
          <ul className={styles.overlaySubList}>
            <li>
              <Link
                to='/architecture/projects'
                className={styles.overlaySubLink}
                onClick={() => setMenuOpen(false)}
              >projects</Link>
            </li>
            <li>
              <Link
                to='/architecture/laconism'
                className={styles.overlaySubLink}
                onClick={() => setMenuOpen(false)}
              >laconism</Link>
            </li>
            <li>
              <Link
                to='/architecture/publications'
                className={styles.overlaySubLink}
                onClick={() => setMenuOpen(false)}
              >publications</Link>
            </li>
          </ul>
        </div>
        <div className={styles.overlayNavUnit}>
          <Link
            to='/paintings'
            className={styles.overlayMainLink}
            onClick={() => setMenuOpen(false)}>
            paintings
          </Link>
          <ul className={styles.overlaySubList}>
            <li>
              <Link
                to='/paintings/collections'
                className={styles.overlaySubLink}
                onClick={() => setMenuOpen(false)}
              >collections</Link>
            </li>
            <li>
              <Link
                to='/paintings/exhibitions'
                className={styles.overlaySubLink}
                onClick={() => setMenuOpen(false)}
              >exhibitions</Link>
            </li>
            <li>
              <Link
                to='/paintings/video-art'
                className={styles.overlaySubLink}
                onClick={() => setMenuOpen(false)}
              >video art</Link>
            </li>
          </ul>
        </div>
        <div className={styles.overlayNavUnit}>
          <Link
            to='/about'
            className={styles.overlayMainLink}
            onClick={() => setMenuOpen(false)}>
            about
          </Link>
          <ul className={styles.overlaySubList}>
            <li>
              <Link
                to='/about/bio'
                className={styles.overlaySubLink}
                onClick={() => setMenuOpen(false)}
              >bio</Link>
            </li>
            <li>
              <Link
                to='/about/contact'
                className={styles.overlaySubLink}
                onClick={() => setMenuOpen(false)}
              >contact</Link>
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
