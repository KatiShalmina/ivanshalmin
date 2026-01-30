import { Link } from 'react-router-dom';
import styles from './MoreButton.module.scss';
import useI18n from '../hooks/useI18n';

export default function MoreButton({ to, children, external, ...props }) {
  const { to: toPath } = useI18n()

  const href =
    typeof to === 'string'
      ? to
      : to?.href

  if (!href) return null

  const isExternal =
    external === true ||
    /^https?:\/\//.test(href)

  if (isExternal) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={styles.moreButton}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      to={toPath(href)}
      className={styles.moreButton}
      {...props}
    >
      {children}
    </Link>
  )
}
