import { Outlet, NavLink } from 'react-router-dom'
import styles from '../SectionLayout.module.scss'

export default function PaintingsLayout() {
  const activeStyle = {
    fontWeight: '600',
    border: '1px solid var(--color-secondary)',
    opacity: '1'
  }

  return (
    <>
      <nav className={styles.subnav}>
        <ul className={styles.subnavList}>
          <li className={styles.subnavItem}>
            <NavLink
              to='collections'
              className={styles.subnavLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              collections
            </NavLink>
          </li>
          <li className={styles.subnavItem}>
            <NavLink
              to='exhibitions'
              className={styles.subnavLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              exhibitions
            </NavLink>
          </li>
          <li className={styles.subnavItem}>
            <NavLink
              to='video-art'
              className={styles.subnavLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              video art
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}