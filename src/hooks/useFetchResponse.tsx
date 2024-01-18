'use client';
import { useEffect, useState } from 'react';
import { RequestResponseData } from '@/types/Requests';

export default function useFetchResponse(lawsuitId: string) {
  const [response, setResponse] = useState<RequestResponseData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/lawsuits/${lawsuitId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json())
      .then((data) => {
        setResponse(data);
        setError(false);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      }).finally(() => {
      setLoading(false);
    });
  }, []);

  return {response, loading, error};
}