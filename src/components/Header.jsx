import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './Header.module.scss'
import burgerIcon from '../assets/icons/burger.svg'

export default function Header({ setMenuOpen }) {
  const { pathname, search } = useLocation()

  const isRu = pathname === '/ru' || pathname.startsWith('/ru/')
  
  const base = isRu ? '/ru' : ''

  const mainNav = isRu 
    ? {
        architecture: 'архитектура',
        paintings: 'живопись',
        about: 'о петровиче',
      }
    : {
        architecture: 'architecture',
        paintings: 'paintings',
        about: 'about',
      }

  const isHome = pathname === base + '/'

  const activeMain = {
    color: 'var(--color-secondary)'
  }

  const switchLangPath = (() => {
    if (isRu) {
      const withoutRu = pathname.replace(/^\/ru/, '') || '/'
      return `${withoutRu}${search}`
    }

    return `/ru${pathname}${search}`
  })()

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}>
          <Link
          to={base + '/'}
          className={`${styles.logo} ${isHome ? styles.logoHome : ''}`}
        >
          Ivan Shalmin
        </Link>
        <Link
          to={switchLangPath}
          className={`${styles.langSwitch} ${isHome ? styles.langHome : ''}`}
          aria-label='Switch language'
        >
          {isRu ? 'en' : 'ru'}
        </Link>
        </div>
        <div>
          {!isHome && (
            <nav className={styles.mainNav}>
              <NavLink
                to={`${base}/architecture`}
                className={styles.mainNavLink}
                style={({ isActive }) => isActive ? activeMain : null}>
                {mainNav.architecture}
              </NavLink>
              <NavLink
                to={`${base}/paintings`}
                className={styles.mainNavLink}
                style={({ isActive }) => isActive ? activeMain : null}>
                {mainNav.paintings}
              </NavLink>
              <NavLink
                to={`${base}/about`}
                className={styles.mainNavLink} style={({ isActive }) => isActive ? activeMain : null}>
                {mainNav.about}
              </NavLink>
            </nav>
          )}
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(true)}
            aria-label='Open menu'
            type='button'
          >
            <img src={burgerIcon} alt='' />
          </button>
        </div>
      </div>
    </header>
  )
}
