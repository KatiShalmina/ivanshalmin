import { Link } from 'react-router-dom';
import styles from './MoreButton.module.scss';

export default function MoreButton({ to }) {
  return (
    <Link to={to} className={styles.moreButton}>
      find out more
    </Link>
  );
}
