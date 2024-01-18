import { NextRequest, NextResponse } from 'next/server';
import { RequestSearchResponse } from '@/types/Requests';

export async function GET(request: NextRequest) {
  const promise: Promise<RequestSearchResponse> = await fetch('https://requests.prod.judit.io/responses?page=1&pageSize=30', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'api-key': String(process.env.API_KEY)
    }
  }).then((response) => {
    return response.json();
  }).catch((error) => {
    console.error(error);
    return error;
  })

  return NextResponse.json(promise);
}