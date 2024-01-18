import { NextRequest, NextResponse } from 'next/server';
import { RequestResponseData, RequestResponseParams } from '@/types/Requests';

export async function GET(request: NextRequest, {params}: RequestResponseParams) {
  const promise: Promise<RequestResponseData> = await fetch(`https://requests.prod.judit.io/responses/${params.lawsuitId}`, {
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