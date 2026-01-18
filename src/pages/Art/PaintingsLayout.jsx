import { Outlet, NavLink, useLocation } from 'react-router-dom'
import styles from '../SectionLayout.module.scss'

export default function PaintingsLayout() {
  const location = useLocation()

  const isRu =
    location.pathname === '/ru' ||
    location.pathname.startsWith('/ru/')

  const subnav = isRu
    ? {
        collections: 'коллекции',
        exhibitions: 'выставки',
        videoArt: 'видео-арт',
      }
    : {
        collections: 'collections',
        exhibitions: 'exhibitions',
        videoArt: 'video art',
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
              to='collections'
              className={styles.subnavLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              {subnav.collections}
            </NavLink>
          </li>
          <li className={styles.subnavItem}>
            <NavLink
              to='exhibitions'
              className={styles.subnavLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              {subnav.exhibitions}
            </NavLink>
          </li>
          <li className={styles.subnavItem}>
            <NavLink
              to='video-art'
              className={styles.subnavLink}
              style={({ isActive }) => isActive ? activeStyle : null}
            >
              {subnav.videoArt}
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}
