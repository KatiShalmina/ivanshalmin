import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import burgerIcon from '../assets/icons/burger.svg'

export default function Header({ setMenuOpen }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link to='/' className={styles.logo}>Ivan Shalmin</Link>
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
