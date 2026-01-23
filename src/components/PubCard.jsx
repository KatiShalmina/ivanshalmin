import { Link } from 'react-router-dom'
import styles from './PubCard.module.scss'
import useI18n from '../hooks/useI18n';

export default function PubCard({ to, title, subtitle, cover }) {
  const { t, to: toPath } = useI18n()

  if (!cover) return null;

  const tTitle = t(title)
  const tSubtitle = t(subtitle)

  return (
    <div className={styles.pubCard}>
      <Link
        to={toPath(to)}
        className={styles.pubCardLink}
      >
        <img
          className={styles.pubCardImg}
          src={cover.src}
          srcSet={cover.srcSet}
          sizes={cover.sizes ?? '400px'}
          alt={tTitle}
          loading='lazy'
        />
        <div className={styles.pubCardInfo}>
          <h2 className={styles.pubCardTitle}>{tTitle}</h2>
          <p className={styles.pubCardSubtitle}>{tSubtitle}</p>
        </div>
      </Link>
    </div >
  )
}
