import styles from './LoadingError.module.scss';

export default function LoadingError() {
  return (
    <div className={styles.wrapper}>
      <i className={styles.icon}>!</i>
      <p className={styles.text}>Erro ao carregar dados</p>
    </div>
  );
}