import { Link } from 'react-router-dom'
import ArrowBack from '../assets/icons/arrow-back.svg?react'
import styles from './BackButton.module.scss'
import useI18n from '../hooks/useI18n'

export default function BackButton({ children, to }) {
  const { to: toPath } = useI18n()

  return (
    <Link
      to={toPath(to)}
      className={styles.backButton}
    >
      <ArrowBack className={styles.backIcon} />
      {children}
    </Link>
  )
}
