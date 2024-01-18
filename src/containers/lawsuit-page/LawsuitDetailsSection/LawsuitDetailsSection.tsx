'use client';
import styles from './LawsuitDetailsSection.module.scss';
import useFetchResponse from '@/hooks/useFetchResponse';
import LawsuitDetails from '@/components/LawsuitDetails/LawsuitDetails';
import { LawsuitDetailsSkeleton } from '@/components/LawsuitDetails/LawsuitDetailsSkeleton';
import EmptyState from '@/components/EmptyState/EmptyState';


export default function LawsuitDetailsSection({lawsuitId}: { lawsuitId: string }) {

  const {response, loading, error} = useFetchResponse(lawsuitId);

  return (
    <div className={styles.container}>
      {
        loading ?
          <LawsuitDetailsSkeleton/>
          :
          response && !error ?
            <LawsuitDetails response={response}/>
            : <EmptyState/>
      }
    </div>
  );
}