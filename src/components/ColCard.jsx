import { Link } from 'react-router-dom'
import styles from './ColCard.module.scss'
import useI18n from '../hooks/useI18n';

export default function ColCard({ to, title, description, cover }) {
  const { t, to: toPath } = useI18n()

  if (!cover) return null;

  const tTitle = t(title)
  const tDescription = t(description)

  return (
    <div className={styles.colCard}>
      <Link
        to={toPath(to)}
        className={styles.colCardLink}
      >
        <img
          className={styles.colCardImg}
          src={cover.src}
          srcSet={cover.srcSet}
          sizes={cover.sizes ?? '400px'}
          alt={title}
          loading='lazy'
        />
        <div className={styles.colCardInfo}>
          <h2 className={styles.colCardTitle}>{tTitle}</h2>
          <div className={styles.colCardDescription}>{tDescription
            .trim()
            .split('\n')
            .map((line, i) => (
              <p key={i}>{line.trim()}</p>
            ))}
          </div>
        </div>
      </Link>
    </div >
  )
}
