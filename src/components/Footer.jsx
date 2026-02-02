import styles from './Footer.module.scss'
import { NavLink, useLocation } from 'react-router-dom'
import useI18n from '../hooks/useI18n'

export default function Footer() {
  const { pathname } = useLocation()
  const { isRu, to } = useI18n()

  const normalizedPath = isRu
    ? pathname.replace(/^\/ru/, '') || '/'
    : pathname

  const isArch = normalizedPath.startsWith('/architecture')
  const isPaintings = normalizedPath.startsWith('/paintings')
  const isAbout = normalizedPath.startsWith('/about')

  const unitClass = isActive =>
    `${styles.footerUnit} ${isActive ? styles.footerUnitActive : ''}`

  const subLinkClass = ({ isActive }) =>
    isActive
      ? `${styles.footerSubLink} ${styles.footerSubLinkActive}`
      : styles.footerSubLink

  const footer = isRu
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

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <nav className={styles.footerNav}>
          <div className={unitClass(isArch)}>
            <NavLink
              to={to('/architecture')}
              className={styles.footerMainLink}
            >
              {footer.architecture}
            </NavLink>
            <ul className={styles.footerList}>
              <li>
                <NavLink
                  to={to('/architecture/projects')}
                  className={subLinkClass}
                >
                  {footer.projects}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={to('/architecture/laconism')}
                  className={subLinkClass}
                >
                  {footer.laconism}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={to('/architecture/publications')}
                  className={subLinkClass}
                >
                  {footer.publications}
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={unitClass(isPaintings)}>
            <NavLink
              to={to('/paintings')}
              className={styles.footerMainLink}
            >
              {footer.paintings}
            </NavLink>
            <ul className={styles.footerList}>
              <li>
                <NavLink
                  to={to('/paintings/collections')}
                  className={subLinkClass}
                >
                  {footer.collections}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={to('/paintings/exhibitions')}
                  className={subLinkClass}
                >
                  {footer.exhibitions}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={to('/paintings/video-art')}
                  className={subLinkClass}
                >
                  {footer.videoArt}
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={unitClass(isAbout)}>
            <NavLink
              to={to('/about')}
              className={styles.footerMainLink}
            >
              {footer.about}
            </NavLink>
            <ul className={styles.footerList}>
              <li>
                <NavLink
                  to={to('/about/bio')}
                  className={subLinkClass}
                >
                  {footer.bio}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={to('/about/contact')}
                  className={subLinkClass}
                >
                  {footer.contact}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <p className={styles.copyright}>© all rights reserved | website by kati shalmina</p>
      </div>
    </footer>
  )
}
