'use client';
import { useContext, useEffect, useState } from 'react';
import { RequestSearchResponse } from '@/types/Requests';
import { CNJSearchContext } from '@/app/context/CNJSearchContext/CNJSearchContext';

export default function useFetchResponses() {
  const [responses, setResponses] = useState<RequestSearchResponse>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const {CNJ, setCNJ}  = useContext(CNJSearchContext);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/lawsuits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({CNJ: CNJ}),
    }).then((response) => response.json())
      .then((data) => {
        setResponses(data);
        setError(false);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      }).finally(() => {
      setLoading(false);
    });
  }, [CNJ]);

  return {responses, loading, error};
}