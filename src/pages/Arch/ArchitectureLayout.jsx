import { Outlet, NavLink } from 'react-router-dom'
import styles from '../SectionLayout.module.scss'

export default function ArchitectureLayout() {
  const activeStyle = {
    fontWeight: '600',
    border: '1px solid var(--color-secondary)',
    opacity: '0.5'
  }

  return (
    <>
      <nav className={styles.subnav}>
        <ul className={styles.subnavList}>
          <li className={styles.subnavItem}>
            <NavLink
              to='projects'
              className={styles.subnavLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              projects
            </NavLink>
          </li>
          <li className={styles.subnavItem}>
            <NavLink
              to='laconism'
              className={styles.subnavLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              laconism
            </NavLink>
          </li>
          <li className={styles.subnavItem}>
            <NavLink
              to='publications'
              className={styles.subnavLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              publications
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}
