import { Link } from 'react-router-dom'
import styles from './BuyButton.module.scss'

export default function BuyButton({ children }) {
  return (
    <Link 
      to='/about/contact'  
      className={styles.buy}
    >
      {children}
    </Link>
  )
}
