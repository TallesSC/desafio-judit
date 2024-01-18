import styles from './LawsuitDetailsSkeleton.module.scss';
export function LawsuitDetailsSkeleton() {
  return (
    <div className={styles.layout}>
      <div className={styles.header}/>
      <div className={styles.row}>
        <div className={styles.card}/>
        <div className={styles.card}/>
      </div>
      <div className={styles.card}/>
    </div>
  );
}