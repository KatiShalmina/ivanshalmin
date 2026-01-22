import { Outlet, NavLink } from 'react-router-dom'
import styles from '../SectionLayout.module.scss'
import useI18n from '../../hooks/useI18n'

export default function ArchitectureLayout() {
  const { isRu } = useI18n()

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
