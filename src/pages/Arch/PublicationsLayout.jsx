import { Outlet, NavLink } from 'react-router-dom'
import styles from './PublicationsLayout.module.scss'

export default function PublicationsLayout() {
  const activeStyle = {
    fontWeight: '600',
    border: '1px solid var(--color-secondary)'
  }

  return (
    <div>
      <nav className={styles.navPub}>
        <ul className={styles.navPubList}>
          <li className={styles.navPubItem}>
            <NavLink
              to='violinist'
              className={styles.navPubLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              violinist
            </NavLink>
          </li>
          <li className={styles.navPubItem}>
            <NavLink
              to='latvia'
              className={styles.navPubLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              fabric of reality
            </NavLink>
          </li>
          <li className={styles.navPubItem}>
            <NavLink
              to='domus'
              className={styles.navPubLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              propylaeum
            </NavLink>
          </li>
          <li className={styles.navPubItem}>
            <NavLink
              to='arch'
              className={styles.navPubLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              arch
            </NavLink>
          </li>
          <li className={styles.navPubItem}>
            <NavLink
              to='interiors'
              className={styles.navPubLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              interiors
            </NavLink>
          </li>
          <li className={styles.navPubItem}>
            <NavLink
              className={styles.navPubLink}
              to='paper'
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              paper
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}