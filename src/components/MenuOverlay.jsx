import { Link } from 'react-router-dom'
import styles from './MenuOverlay.module.scss'
import closeIcon from '../assets/icons/close.svg'
import useI18n from '../hooks/useI18n'

export default function MenuOverlay({ menuOpen, setMenuOpen }) {
  const { isRu, to } = useI18n()

  const nav = isRu
    ? {
        architecture: 'архитектура',
        projects: 'проекты',
        laconism: 'лаконизм',
        publications: 'публикации',

        paintings: 'живопись',
        collections: 'коллекции',
        exhibitions: 'выставки',
        videoArt: 'видео-арт',

        about: 'о петровиче',
        bio: 'биография',
        contact: 'контакты',
      }
    : {
        architecture: 'architecture',
        projects: 'projects',
        laconism: 'laconism',
        publications: 'publications',

        paintings: 'paintings',
        collections: 'collections',
        exhibitions: 'exhibitions',
        videoArt: 'video art',

        about: 'about',
        bio: 'bio',
        contact: 'contact',
      }
    
  const close = () => setMenuOpen(false)

  return (
    <div className={`${styles.overlay} ${menuOpen ? styles.open : ''}`}>
      <nav className={styles.overlayNav}>
        <div className={styles.overlayNavUnit}>
          <Link
            to={to('/architecture')}
            className={styles.overlayMainLink}
            onClick={close}>            
            {nav.architecture}
          </Link>
          <ul className={styles.overlaySubList}>
            <li>
              <Link
                to={to('/architecture/projects')}
                className={styles.overlaySubLink}
                onClick={close}
              >{nav.projects}</Link>
            </li>
            <li>
              <Link
                to={to('/architecture/laconism')}
                className={styles.overlaySubLink}
                onClick={close}
              >{nav.laconism}</Link>
            </li>
            <li>
              <Link
                to={to('/architecture/publications')}
                className={styles.overlaySubLink}
                onClick={close}
              >{nav.publications}</Link>
            </li>
          </ul>
        </div>
        <div className={styles.overlayNavUnit}>
          <Link
            to={to('/paintings')}
            className={styles.overlayMainLink}
            onClick={close}>
            {nav.paintings}
          </Link>
          <ul className={styles.overlaySubList}>
            <li>
              <Link
                to={to('/paintings/collections')}
                className={styles.overlaySubLink}
                onClick={close}
              >{nav.collections}</Link>
            </li>
            <li>
              <Link
                to={to('/paintings/exhibitions')}
                className={styles.overlaySubLink}
                onClick={close}
              >{nav.exhibitions}</Link>
            </li>
            <li>
              <Link
                to={to('/paintings/video-art')}
                className={styles.overlaySubLink}
                onClick={close}
              >{nav.videoArt}</Link>
            </li>
          </ul>
        </div>
        <div className={styles.overlayNavUnit}>
          <Link
            to={to('/about')}
            className={styles.overlayMainLink}
            onClick={close}>
            {nav.about}
          </Link>
          <ul className={styles.overlaySubList}>
            <li>
              <Link
                to={to('/about/bio')}
                className={styles.overlaySubLink}
                onClick={close}
              >{nav.bio}</Link>
            </li>
            <li>
              <Link
                to={to('/about/contact')}
                className={styles.overlaySubLink}
                onClick={close}
              >{nav.contact}</Link>
            </li>
          </ul>
        </div>
      </nav>
      <button
        className={styles.closeButton}
        onClick={close}
         aria-label={isRu ? 'Закрыть меню' : 'Close menu'}
        type='button'
      >
        <img src={closeIcon} alt='' />
      </button>
    </div>
  )
}
