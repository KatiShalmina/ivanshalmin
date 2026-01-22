import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './Header.module.scss'
import burgerIcon from '../assets/icons/burger.svg'
import useI18n from '../hooks/useI18n'

export default function Header({ setMenuOpen }) {
  const { pathname, search } = useLocation()
  const { isRu, base, to } = useI18n()

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

  const isHome =
    pathname === base ||
    pathname === `${base}/`

  const activeMain = {
    color: 'var(--color-secondary)'
  }

  const switchLangPath = (() => {
    if (isRu) {
      const withoutRu =
        pathname.replace(/^\/ru/, '') || '/'
      return `${withoutRu}${search}`
    }

    return `/ru${pathname}${search}`
  })()

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}>
          <Link
            to={to('/')}
            className={styles.logo}
          >
            Ivan Shalmin
          </Link>
          <Link
            to={switchLangPath}
            className={styles.langSwitch}
            aria-label={isRu ? 'Переключить язык на английский' : 'Switch language to Russian'}
          >
            {isRu ? 'en' : 'ru'}
          </Link>
        </div>
        <div>
          {!isHome && (
            <nav className={styles.mainNav}>
              <NavLink
                to={to('/architecture')}
                className={styles.mainNavLink}
                style={({ isActive }) => isActive ? activeMain : null}>
                {mainNav.architecture}
              </NavLink>
              <NavLink
                to={to('/paintings')}
                className={styles.mainNavLink}
                style={({ isActive }) => isActive ? activeMain : null}>
                {mainNav.paintings}
              </NavLink>
              <NavLink
                to={to('/about')}
                className={styles.mainNavLink} style={({ isActive }) => isActive ? activeMain : null}>
                {mainNav.about}
              </NavLink>
            </nav>
          )}
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(true)}
            aria-label={isRu ? 'Открыть меню' : 'Open menu'}
            type='button'
          >
            <img src={burgerIcon} alt='' />
          </button>
        </div>
      </div>
    </header>
  )
}
