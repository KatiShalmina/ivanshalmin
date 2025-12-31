import styles from './Footer.module.scss'
import { NavLink, useLocation } from 'react-router-dom'

export default function Footer() {
  const { pathname } = useLocation()

  const isArch = pathname.startsWith('/architecture')
  const isPaintings = pathname.startsWith('/paintings')
  const isAbout = pathname.startsWith('/about')

  const unitClass = isActive =>
    `${styles.footerUnit} ${isActive ? styles.footerUnitActive : ''}`

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <nav className={styles.footerNav}>
          <div className={unitClass(isArch)}>
            <NavLink
              to='/architecture'
              className={styles.footerMainLink}
            >
              architecture
            </NavLink>
            <ul className={styles.footerList}>
              <li>
                <NavLink
                  to='/architecture/projects'
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.footerSubLink} ${styles.footerSubLinkActive}`
                      : styles.footerSubLink
                  }
                >
                  projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/architecture/laconism'
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.footerSubLink} ${styles.footerSubLinkActive}`
                      : styles.footerSubLink
                  }
                >
                  laconism
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/architecture/publications'
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.footerSubLink} ${styles.footerSubLinkActive}`
                      : styles.footerSubLink
                  }
                >
                  publications
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={unitClass(isPaintings)}>
            <NavLink
              to='/paintings'
              className={styles.footerMainLink}
            >
              paintings
            </NavLink>
            <ul className={styles.footerList}>
              <li>
                <NavLink
                  to='/paintings/collections'
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.footerSubLink} ${styles.footerSubLinkActive}`
                      : styles.footerSubLink
                  }
                >
                  collections
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/paintings/exhibitions'
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.footerSubLink} ${styles.footerSubLinkActive}`
                      : styles.footerSubLink
                  }
                >
                  exhibitions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/paintings/video-art'
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.footerSubLink} ${styles.footerSubLinkActive}`
                      : styles.footerSubLink
                  }
                >
                  video art
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={unitClass(isAbout)}>
            <NavLink
              to='/about'
              className={styles.footerMainLink}
            >
              about
            </NavLink>
            <ul className={styles.footerList}>
              <li>
                <NavLink
                  to='/about/bio'
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.footerSubLink} ${styles.footerSubLinkActive}`
                      : styles.footerSubLink
                  }
                >
                  bio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/about/contact'
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.footerSubLink} ${styles.footerSubLinkActive}`
                      : styles.footerSubLink
                  }
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <p className={styles.copyright}>© IvanShalmin. All rights reserved.</p>
      </div>
    </footer>
  )
}
