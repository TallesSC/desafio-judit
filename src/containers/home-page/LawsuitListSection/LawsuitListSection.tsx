'use client';
import styles from './LawsuitListSection.module.scss';
import useFetchResponses from '@/hooks/useFetchResponses';
import LawsuitListItem from '@/components/LawsuitListItem/LawsuitListItem';
import LawsuitListItemSkeleton from '@/components/LawsuitListItem/LawsuitListItemSkeleton';
import EmptyState from '@/components/EmptyState/EmptyState';

export default function LawsuitListSection() {

  const {responses, loading, error} = useFetchResponses();

  return (
    <ul className={styles.list}>
      {
        loading ? <LawsuitListItemSkeleton/>
        : (
          responses && !error ?
            responses.page_data?.map((response) => (
              <LawsuitListItem key={response.response_id}
                               name={response.response_data.name}
                               id={response.response_id}
                               code={response.response_data.code}/>
            ))
            :
            <EmptyState/>
        )
      }
    </ul>
  );
}