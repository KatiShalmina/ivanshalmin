import styles from './Footer.module.scss'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  const activeStyle = {
    fontWeight: '600',
    border: '1px solid var(--color-secondary)',
    opacity: '1'
  }

  const activeMain = {
    opacity: '1'
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <nav className={styles.footerNav}>
          <div className={styles.footerUnit}>
            <NavLink
              to='/architecture'
              className={styles.footerMainLink}
              style={({ isActive }) => isActive ? activeMain : null}>              
              architecture
            </NavLink>
            <ul className={styles.footerList}>
              <li>
                <NavLink
                  to='/architecture/projects'
                  className={styles.footerSubLink}
                  style={({ isActive }) => isActive ? activeStyle : null}>
                  projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/architecture/laconism'
                  className={styles.footerSubLink}
                  style={({ isActive }) => isActive ? activeStyle : null}>
                  laconism
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/architecture/publications'
                  className={styles.footerSubLink}
                  style={({ isActive }) => isActive ? activeStyle : null}>
                  publications
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.footerUnit}>
            <NavLink
              to='/paintings'
              className={styles.footerMainLink}
              style={({ isActive }) => isActive ? activeMain : null}>              
              paintings
            </NavLink>
            <ul className={styles.footerList}>
              <li>
                <NavLink
                  to='/paintings/collections'
                  className={styles.footerSubLink}
                  style={({ isActive }) => isActive ? activeStyle : null}>
                  collections
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/paintings/exhibitions'
                  className={styles.footerSubLink}
                  style={({ isActive }) => isActive ? activeStyle : null}>
                  exhibitions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/paintings/video-art'
                  className={styles.footerSubLink}
                  style={({ isActive }) => isActive ? activeStyle : null}>
                  video art
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.footerUnit}>
            <NavLink
              to='/about'
              className={styles.footerMainLink}style={({ isActive }) => isActive ? activeMain : null}>
              about
            </NavLink>
            <ul className={styles.footerList}>
              <li>
                <NavLink
                  to='/about/bio'
                  className={styles.footerSubLink}
                  style={({ isActive }) => isActive ? activeStyle : null}>
                  bio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/about/contact'
                  className={styles.footerSubLink}
                  style={({ isActive }) => isActive ? activeStyle : null}>
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
