import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link to='/' className={styles.logo}>Ivan Shalmin</Link>
      </div>
    </header>
  )
}