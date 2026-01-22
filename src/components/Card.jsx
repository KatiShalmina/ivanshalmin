import { Link } from 'react-router-dom'
import styles from './Card.module.scss'
import useI18n from '../hooks/useI18n';

export default function Card({ to, slug, titleParts, subtitle, cover }) {
  const { t, lang, to: toPath } = useI18n()

  if (!cover) return null;

  const [main = '', tail = ''] = titleParts?.[lang] ?? titleParts?.en ?? ['', '']
  const tSubtitle = t(subtitle)

  const isPaintingsCover = Boolean(cover.src || cover.srcSet)

  return (
    <div className={styles.card}>
      <Link
        to={toPath(to)}
        className={styles.cardLink}
      >
        {isPaintingsCover ? (
          <img
            className={styles.cardImg}
            src={cover.src}
            srcSet={cover.srcSet}
            sizes={cover.sizes ?? '100vw'}
            alt={slug}
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
              alt={slug}
              loading='lazy'
            />
          </picture>
        )}
        <div className={styles.cardInfo}>
          <h2 className={styles.cardTitle}>
            {main}
            <span className='nowrap'>{tail}</span>
          </h2>
          <p className={styles.cardSubtitle}>{tSubtitle}</p>
        </div>
      </Link>
    </div >
  )
}
