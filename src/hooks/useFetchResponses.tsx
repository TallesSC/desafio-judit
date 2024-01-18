'use client';
import { useEffect, useState } from 'react';
import { RequestSearchResponse } from '@/types/Requests';

export default function useFetchResponses() {
  const [responses, setResponses] = useState<RequestSearchResponse>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/lawsuits', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
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
  }, []);

  return {responses, loading, error};
}