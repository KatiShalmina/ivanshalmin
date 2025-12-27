import { Link } from 'react-router-dom'
import styles from './Card.module.scss'

export default function Card({ to, title, year, cover }) {
  if (!cover) return null;

  return (
    <div className={styles.card}>
      <Link to={to} className={styles.cardLink}>
        <picture className={styles.cardCover}>
          <source
            media='(min-width: 1024px)'
            srcSet={cover.desktop.srcSet}
            sizes={cover.desktop.sizes ?? '1440px'}
            />
          <img
            src={cover.mobile.src}
            srcSet={cover.mobile.srcSet}
            sizes={cover.mobile.sizes ?? '100vw'}
            alt={title}
            loading='lazy'
          />
        </picture>
        <div className={styles.cardInfo}>
          <h2 className={styles.cardTitle}>{title}</h2>
          {year && <p className={styles.cardYear}>{year}</p>}
        </div>
      </Link>
    </div >
  )
}
