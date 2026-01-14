import { Link } from 'react-router-dom';
import styles from './MoreButton.module.scss';

export default function MoreButton({ to, children, external = false }) {
  if (external) {
    return (
      <a
        href={to}
        target='_blank'
        rel='noopener noreferrer'
        className={styles.moreButton}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={styles.moreButton}>
      {children}
    </Link>
  );
}
