import { Link, useLocation } from 'react-router-dom'
import styles from './PubCard.module.scss'

export default function PubCard({ to, state, title, subtitle, cover }) {
  const { pathname } = useLocation()

  if (!cover) return null;

  const isRu = pathname === '/ru' || pathname.startsWith('/ru/')

  const base = isRu ? '/ru' : ''
  const lang = isRu ? 'ru' : 'en'
  
  const resolvedTo =
  typeof to === 'string'
    ? `${base}${to.startsWith('/') ? to : `/${to}`}`
    : to

  const resolvedTitle = typeof title === 'string' ? title : title?.[lang] ?? title?.en ?? ''
  const resolvedSubtitle =
    typeof subtitle === 'string' ? subtitle : subtitle?.[lang] ?? subtitle?.en ?? ''

  return (
    <div className={styles.pubCard}>
      <Link
        to={resolvedTo}
        state={state}
        className={styles.pubCardLink}
        data-painting-slug={state?.focusSlug}
      >
        <img
          className={styles.pubCardImg}
          src={cover.src}
          srcSet={cover.srcSet}
          sizes={cover.sizes ?? '400px'}
          alt={title}
          loading='lazy'
        />
        <div className={styles.pubCardInfo}>
          <h2 className={styles.pubCardTitle}>{resolvedTitle}</h2>
          <p className={styles.pubCardSubtitle}>{resolvedSubtitle}</p>
        </div>
      </Link>
    </div >
  )
}
