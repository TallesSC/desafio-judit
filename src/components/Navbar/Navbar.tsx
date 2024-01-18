import styles from './Navbar.module.scss';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href={'/'} className={styles.link}>
        <img src="/images/logo-judit.svg" alt="Logo JUDIT"/>
      </Link>
    </nav>
  );
}