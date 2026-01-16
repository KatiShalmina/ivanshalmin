import { Link } from 'react-router-dom'
import styles from './PubCard.module.scss'

export default function PubCard({ to, state, title, subtitle, cover }) {
  if (!cover) return null;

  return (
    <div className={styles.pubCard}>
      <Link
        to={to}
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
          <h2 className={styles.pubCardTitle}>{title}</h2>
          <p className={styles.pubCardSubtitle}>{subtitle}</p>
        </div>
      </Link>
    </div >
  )
}
