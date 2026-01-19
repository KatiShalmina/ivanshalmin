import { Link, useLocation } from 'react-router-dom'
import styles from './Card.module.scss'

export default function Card({ to, title, cover }) {
  const { pathname } = useLocation()

  if (!cover) return null;

  const isRu =
    pathname === '/ru' ||
    pathname.startsWith('/ru/')

  const base = isRu ? '/ru' : ''

  const resolvedTo =
    typeof to === 'string'
      ? `${base}${to.startsWith('/') ? to : `/${to}`}`
      : to

  const resolvedTitle =
    typeof title === 'string'
      ? title
      : title?.[isRu ? 'ru' : 'en'] ?? title?.en ?? ''

  const isPaintingsCover = Boolean(cover.src || cover.srcSet)

  return (
    <div className={styles.card}>
      <Link 
        to={resolvedTo}
        className={styles.cardLink}
      >
        {isPaintingsCover ? (
          <img
            className={styles.cardImg}
            src={cover.src}
            srcSet={cover.srcSet}
            sizes={cover.sizes ?? '100vw'}
            alt={resolvedTitle}
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
              alt={resolvedTitle}
              loading='lazy'
            />
          </picture>
        )}
        <div className={styles.cardInfo}>
          <h2 className={styles.cardTitle}>{resolvedTitle}</h2>
        </div>
      </Link>
    </div >
  )
}
