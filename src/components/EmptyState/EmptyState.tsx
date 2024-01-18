import styles from './EmptyState.module.scss';

export default function EmptyState() {
  return (
    <div className={styles.wrapper}>
      <i className={styles.icon}>!</i>
      <p className={styles.text}>Não foram encontrados processos com o CNJ inserido.</p>
    </div>
  );
}