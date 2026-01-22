import { Link } from 'react-router-dom'
import ArrowBack from '../assets/icons/arrow-back.svg?react'
import styles from './PrevNextButton.module.scss'
import useI18n from '../hooks/useI18n'

export default function NextButton({ to, children }) {
  const { to: toPath } = useI18n()

  return (
    <Link to={toPath(to)} className={styles.button}>
      {children}
      <ArrowBack className={`${styles.icon} ${styles.rotate}`} />
    </Link>
  )
}
