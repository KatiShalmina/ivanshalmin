import { NavLink, Outlet } from 'react-router-dom'
import styles from './PublicationsLayout.module.scss'

export default function InteriorsLayout() {
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
              to='glass'
              className={styles.navPubLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              looking glass
            </NavLink>
          </li>
          <li className={styles.navPubItem}>
            <NavLink
              to='beginning'
              className={styles.navPubLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              the beginning
            </NavLink>
          </li>
          <li className={styles.navPubItem}>
            <NavLink
              to='nsk'
              className={styles.navPubLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              with love
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}