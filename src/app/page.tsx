'use client';
import LawsuitListSection from '@/containers/home-page/LawsuitListSection/LawsuitListSection';
import SearchBarSection from '@/containers/home-page/SearchBarSection/SearchBarSection';
import { CNJSearchProvider } from '@/app/context/CNJSearchContext/CNJSearchContext';

export default function Home() {
  return (
    <CNJSearchProvider>
      <div>
        <h1 className="pageTitle">Processos</h1>
        <SearchBarSection/>
        <LawsuitListSection/>
      </div>
    </CNJSearchProvider>
  );
}