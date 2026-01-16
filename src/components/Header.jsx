import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './Header.module.scss'
import burgerIcon from '../assets/icons/burger.svg'

export default function Header({ setMenuOpen }) {
  const location = useLocation()

  const isRu = location.pathname === '/ru' || location.pathname.startsWith('/ru/')
  const base = isRu ? '/ru' : ''

  const isHome = location.pathname === base + '/'

  const activeMain = {
    color: 'var(--color-secondary)'
  }

  const switchLangPath = (() => {
    if (isRu) {
      const withoutRu = location.pathname.replace(/^\/ru/, '') || '/'
      return withoutRu + location.search
    }

    return '/ru' + location.pathname + location.search
  })()

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link
          to={base + '/'}
          className={`${styles.logo} ${isHome ? styles.logoHome : ''}`}
        >
          Ivan Shalmin
        </Link>
        <div>
          {!isHome && (
            <nav className={styles.mainNav}>
              <NavLink
                to={`${base}/architecture`}
                className={styles.mainNavLink}
                style={({ isActive }) => isActive ? activeMain : null}>
                architecture
              </NavLink>
              <NavLink
                to={`${base}/paintings`}
                className={styles.mainNavLink}
                style={({ isActive }) => isActive ? activeMain : null}>
                paintings
              </NavLink>
              <NavLink
                to={`${base}/paintings`}
                className={styles.mainNavLink} style={({ isActive }) => isActive ? activeMain : null}>
                about
              </NavLink>
            </nav>
          )}
          <div className={styles.buttonWrapper}>
            <Link
              to={switchLangPath}
              className={`${styles.langSwitch} ${isHome ? styles.langHome : ''}`}
              aria-label='Switch language'
            >
              {isRu ? 'en' : 'ru'}
            </Link>
            <button
              className={styles.burger}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              type='button'
            >
              <img src={burgerIcon} alt='' />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
