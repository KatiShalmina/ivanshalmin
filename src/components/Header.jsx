import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './Header.module.scss'
import burgerIcon from '../assets/icons/burger.svg'

export default function Header({ setMenuOpen }) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const activeMain = {
    color: 'var(--color-secondary)'
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link 
          to='/' 
          className={`${styles.logo} ${isHome ? styles.logoHome : ''}`}
        >
          Ivan Shalmin
        </Link>
        {!isHome && (
          <nav className={styles.mainNav}>
            <NavLink
              to='/architecture'
              className={styles.mainNavLink}
              style={({ isActive }) => isActive ? activeMain : null}>
              architecture
            </NavLink>
            <NavLink
              to='/paintings'
              className={styles.mainNavLink}
              style={({ isActive }) => isActive ? activeMain : null}>
              paintings
            </NavLink>
            <NavLink
              to='/about'
              className={styles.mainNavLink} style={({ isActive }) => isActive ? activeMain : null}>
              about
            </NavLink>
          </nav>
        )}
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          type='button'
        >
          <img src={burgerIcon} alt='' />
        </button>
      </div>
    </header>
  )
}
