import { Outlet, NavLink } from 'react-router-dom'
import styles from '../SectionLayout.module.scss'

export default function AboutLayout() {
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
              to='bio'
              className={styles.subnavLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              bio
            </NavLink>
          </li>
          <li className={styles.subnavItem}>
            <NavLink
              to='contact'
              className={styles.subnavLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}
