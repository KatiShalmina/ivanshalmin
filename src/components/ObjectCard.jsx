import { Link } from 'react-router-dom'
import styles from './ObjectCard.module.scss'

export default function ObjectCard({ slug, title, year, cover, index, originalWidth }) {
  return (
    <div className={styles.objectCard}>
      <Link to={`/objects/${slug}`}>
        <img
          className={styles.objectCover}
          src={`${cover}/480/${slug}480-${index}.webp`}
          srcSet={`
            ${cover}/480/${slug}480-${index}.webp 480w,
            ${cover}/1024/${slug}1024-${index}.webp 1024w,
            ${cover}/1920/${slug}1920-${index}.webp 1920w,
            ${cover}/original/${slug}-${index}.webp ${originalWidth}w
          `}
          sizes='
            (max-width: 640px) 100vw,
            1440px
          '
          alt={title}
          loading='lazy'
        />
        <div className={styles.objectInfo}>
          <h2 className={styles.objectTitle}>{title}</h2>
          <p className={styles.objectYear}>{year}</p>
        </div>
      </Link>
    </div>
  )
}