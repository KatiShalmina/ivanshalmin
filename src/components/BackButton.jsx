import { Link } from 'react-router-dom'
import ArrowBack from '../assets/icons/arrow.svg?react'
import styles from './BackButton.module.scss'

export default function BackButton({ children }) {
  return (
    <Link 
      to='..' 
      relative='path' 
      className={styles.backButton}
    >
      <ArrowBack className={styles.backIcon} />
      {children}
    </Link>
  )
}