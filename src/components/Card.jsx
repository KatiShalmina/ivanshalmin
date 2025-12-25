import { Link } from 'react-router-dom'
import styles from './Card.module.scss'

export default function ObjectCard({ slug, year, originalWidth }) {
  return (
    <div className={styles.card}>
      <Link to={`/architecture/projects/${slug}`} className={styles.cardLink}>
        <picture className={styles.cardCover}>
          <source
            media='(min-width: 1024px)'
            srcSet={`
            /images/projects/covers/desktop/${slug}1024-cut.webp 1024w,
            /images/projects/covers/desktop/${slug}-orig-cut.webp ${originalWidth}w
            `}
            sizes='1440px'
            />
          <img
            src={`/images/projects/covers/mobile/${slug}480.webp`}
            srcSet={`
            /images/projects/covers/mobile/${slug}480.webp 480w,
            /images/projects/covers/mobile/${slug}1024.webp 1024w
           `}
            sizes='100vw'
            alt={slug}
            loading='lazy'
          />
        </picture>
        <div className={styles.cardInfo}>
          <h2 className={styles.cardTitle}>{slug}</h2>
          <p className={styles.cardYear}>{year}</p>
        </div>
      </Link>
    </div >
  )
}
