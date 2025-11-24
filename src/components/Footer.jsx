import styles from './Footer.module.scss'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerInfoWrapper}>
          <div className={styles.footerContacts}>
            <a href='mailto:sasha.shalmina@gmail.com' target='_blank' rel='noopener noreferrer'>
              sasha.shalmina@gmail.com
            </a>
            <a href='tel:+447472063877'>
              +44 747 206 38 77
            </a>
          </div>
          <p>© IvanShalmin. All rights reserved.</p>
        </div>
        
        <nav className={styles.footerNav}>
          <div className={styles.footerNavUnit}>
            <h2>architecture</h2>
            <ul className={styles.footerNavList}>
              <li>
                <NavLink to='objects'>objects</NavLink>
              </li>
              <li>
                <NavLink to='laconism'>laconism</NavLink>
              </li>
              <li>
                <NavLink to='publications'>publications</NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.footerNavUnit}>
            <h2>digital art</h2>
            <ul className={styles.footerNavList}>
              <li>
                <NavLink to='paintings'>paintings</NavLink>
              </li>
              <li>
                <NavLink to='exhibitions'>exhibitions</NavLink>
              </li>
              <li>
                <NavLink to='video-art'>video art</NavLink>
              </li>
              <li>
                <NavLink to='contacts'>buy</NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.footerNavUnit}>
            <h2>about</h2>
            <ul className={styles.footerNavList}>
              <li>
                <NavLink to='bio'>bio</NavLink>
              </li>
              <li>
                <NavLink to='stories'>stories</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  )
}