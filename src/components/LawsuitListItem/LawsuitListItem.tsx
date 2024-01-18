import styles from './LawsuitListItem.module.scss';
import Link from 'next/link';

export default function LawsuitListItem({name, id, code}: LawsuitListItemProps) {
  return (
    <li key={id} className={styles.item}>
      <Link href={`/lawsuit/${id}`} className={styles.link}>
        <span className={styles.code} title={code}>{code}</span>
        <span className={styles.name} title={name}>{name}</span>
      </Link>
    </li>
  );
}

interface LawsuitListItemProps {
  name: string,
  id: string,
  code: string,
}