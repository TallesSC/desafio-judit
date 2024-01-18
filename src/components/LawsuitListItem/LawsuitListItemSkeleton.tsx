import styles from './LawsuitListItemSkeleton.module.scss';
export default function LawsuitListItemSkeleton() {
  return <>
    {Array(10).fill(0).map((_, index) => (
      <div key={index} className={styles.itemSkeleton}/>
    ))}
  </>
}