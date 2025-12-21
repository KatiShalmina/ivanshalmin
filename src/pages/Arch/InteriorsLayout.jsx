import { NavLink, Outlet } from 'react-router-dom'
import styles from './InteriorsLayout.module.scss'

export default function InteriorsLayout() {
  const activeStyle = {
    fontWeight: '600'
  }

  return (
    <div className={styles.interiors}>
      <nav className={styles.navInt}>
        <ul className={styles.navIntList}>
          <li className={styles.navIntItem}>
            <NavLink
              to='glass'
              className={styles.navIntLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              glass
            </NavLink>
          </li>
          <li className={styles.navIntItem}>
            <NavLink
              to='beginning'
              className={styles.navIntLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              the beginning
            </NavLink>
          </li>
          <li className={styles.navIntItem}>
            <NavLink
              to='love'
              className={styles.navIntLink}
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
