import { Outlet, NavLink, useLocation } from 'react-router-dom'
import styles from '../SectionLayout.module.scss'

export default function ArchitectureLayout() {
  const location = useLocation()

  const isRu =
    location.pathname === '/ru' ||
    location.pathname.startsWith('/ru/')

  const subnav = isRu
    ? {
        projects: 'проекты',
        laconism: 'лаконизм',
        publications: 'публикации',
      }
    : {
        projects: 'projects',
        laconism: 'laconism',
        publications: 'publications',
      }

  const activeStyle = {
    fontWeight: '600',
    border: '1px solid var(--color-secondary)',
    color: 'var(--color-secondary)'
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
              {subnav.projects}
            </NavLink>
          </li>
          <li className={styles.subnavItem}>
            <NavLink
              to='laconism'
              className={styles.subnavLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              {subnav.laconism}
            </NavLink>
          </li>
          <li className={styles.subnavItem}>
            <NavLink
              to='publications'
              className={styles.subnavLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              {subnav.publications}
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}
