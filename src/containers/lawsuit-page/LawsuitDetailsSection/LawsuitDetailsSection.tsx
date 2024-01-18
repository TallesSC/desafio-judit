'use client';
import styles from './LawsuitDetailsSection.module.scss';
import useFetchResponse from '@/hooks/useFetchResponse';
import LawsuitDetails from '@/components/LawsuitDetails/LawsuitDetails';
import { LawsuitDetailsSkeleton } from '@/components/LawsuitDetails/LawsuitDetailsSkeleton';
import LoadingError from '@/components/LoadingError/LoadingError';


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
            : <LoadingError/>
      }
    </div>
  );
}