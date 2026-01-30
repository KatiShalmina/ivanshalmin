import { Outlet, NavLink } from 'react-router-dom'
import styles from '../SectionLayout.module.scss'
import useI18n from '../../hooks/useI18n'

export default function AboutLayout() {
  const { isRu } = useI18n()

  const subnav = isRu
    ? {
        bio: 'биография',
        contact: 'контакты',
      }
    : {
        bio: 'bio',
        contact: 'contact',
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
              to='bio'
              className={styles.subnavLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              {subnav.bio}
            </NavLink>
          </li>
          <li className={styles.subnavItem}>
            <NavLink
              to='contact'
              className={styles.subnavLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              {subnav.contact}
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}
