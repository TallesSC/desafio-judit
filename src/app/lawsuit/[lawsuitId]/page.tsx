import { RequestResponseParams } from '@/types/Requests';
import LawsuitDetailsSection from '@/containers/lawsuit-page/LawsuitDetailsSection/LawsuitDetailsSection';

export default function LawsuitPage({params}: RequestResponseParams) {
  return (
    <LawsuitDetailsSection lawsuitId={params.lawsuitId} />
  );
}