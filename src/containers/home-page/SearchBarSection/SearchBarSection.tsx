'use client';
import styles from './SearchBarSection.module.scss'
import { useContext, useState } from 'react';
import { CNJSearchContext } from '@/app/context/CNJSearchContext/CNJSearchContext';

export default function SearchBarSection() {

  const {CNJ, setCNJ}  = useContext(CNJSearchContext);
  const [input, setInput] = useState('');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCNJ(input);
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={submitHandler}>
        <input value={input}
               onChange={(e) => setInput(e.target.value)}
               type="text"
               placeholder="Pesquise por CNJ"/>
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}