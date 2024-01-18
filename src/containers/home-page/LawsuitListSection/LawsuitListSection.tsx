'use client';
import styles from './LawsuitListSection.module.scss';
import useFetchResponses from '@/hooks/useFetchResponses';
import LawsuitListItem from '@/components/LawsuitListItem/LawsuitListItem';
import LawsuitListItemSkeleton from '@/components/LawsuitListItem/LawsuitListItemSkeleton';
import LoadingError from '@/components/LoadingError/LoadingError';

export default function LawsuitListSection() {

  const {responses, loading, error} = useFetchResponses();

  return (
    <ul className={styles.list}>
      {
        loading ? <LawsuitListItemSkeleton/>
        : (
          responses && !error ?
            responses.page_data.map((response) => (
              <LawsuitListItem name={response.response_data.name}
                               id={response.response_id}
                               code={response.response_data.code}/>
            ))
            :
            <LoadingError/>
        )
      }
    </ul>
  );
}