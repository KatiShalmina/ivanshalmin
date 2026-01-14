import { Link } from 'react-router-dom'
import styles from './Card.module.scss'

export default function Card({ to, state, title, cover }) {
  if (!cover) return null;

  const isPaintingsCover = Boolean(cover.src || cover.srcSet)

  return (
    <div className={styles.card}>
      <Link 
        to={to}
        state={state} 
        className={styles.cardLink}
        data-painting-slug={state?.focusSlug}
      >
        {isPaintingsCover ? (
          <img
            className={styles.cardImg}
            src={cover.src}
            srcSet={cover.srcSet}
            sizes={cover.sizes ?? '100vw'}
            alt={title}
            loading='lazy'
          />
        ) : (
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
        )}
        <div className={styles.cardInfo}>
          <h2 className={styles.cardTitle}>{title}</h2>
        </div>
      </Link>
    </div >
  )
}
