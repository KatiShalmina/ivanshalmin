import styles from './Footer.module.scss'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  const activeStyle = {
		fontWeight: '600',
		border: '1px solid #ffffff'
	}

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>        
        <nav className={styles.footerNav}>
          <div className={styles.footerUnit}>
            <h2 className={styles.footerTitle}>architecture</h2>
            <ul className={styles.footerList}>
              <li>
                <NavLink 
                  to='objects' 
                  className={styles.footerLink}
                  style={({ isActive }) => isActive ? activeStyle : null}
                >objects</NavLink>
              </li>
              <li>
                <NavLink 
                  to='laconism' 
                  className={styles.footerLink}
                  style={({ isActive }) => isActive ? activeStyle : null}
                >laconism</NavLink>
              </li>
              <li>
                <NavLink 
                  to='publications' 
                  className={styles.footerLink}
                  style={({ isActive }) => isActive ? activeStyle : null}
                >publications</NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.footerUnit}>
            <h2 className={styles.footerTitle}>digital art</h2>
            <ul className={styles.footerList}>
              <li>
                <NavLink 
                  to='paintings' 
                  className={styles.footerLink}
                  style={({ isActive }) => isActive ? activeStyle : null}
                >paintings</NavLink>
              </li>
              <li>
                <NavLink 
                  to='exhibitions' 
                  className={styles.footerLink}
                  style={({ isActive }) => isActive ? activeStyle : null}
                >exhibitions</NavLink>
              </li>
              <li>
                <NavLink 
                  to='video-art' 
                  className={styles.footerLink}
                  style={({ isActive }) => isActive ? activeStyle : null}
                >video art</NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.footerUnit}>
            <h2 className={styles.footerTitle}>about</h2>
            <ul className={styles.footerList}>
              <li>
                <NavLink 
                  to='bio' 
                  className={styles.footerLink}
                  style={({ isActive }) => isActive ? activeStyle : null}
                >bio</NavLink>
              </li>
              <li>
                <NavLink 
                  to='stories' 
                  className={styles.footerLink}
                  style={({ isActive }) => isActive ? activeStyle : null}
                >stories</NavLink>
              </li>
              <li>
                <NavLink 
                  to='contacts' 
                  className={styles.footerLink}
                  style={({ isActive }) => isActive ? activeStyle : null}
                >contacts</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <p className={styles.copyright}>© IvanShalmin. All rights reserved.</p>
      </div>
    </footer>
  )
}
