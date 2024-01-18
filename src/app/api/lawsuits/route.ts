import { NextRequest, NextResponse } from 'next/server';
import { RequestSearchResponse } from '@/types/Requests';

export async function POST(request: NextRequest) {

  const CNJ = (await request.json())?.['CNJ'];

  const baseUrl = `https://requests.prod.judit.io/requests`;
  const url = CNJ ? `${baseUrl}?search_type=%5B'lawsuit_cnj'%5D&search_key=${CNJ}` : baseUrl;
  const requestsResult: RequestSearchResponse = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'api-key': String(process.env.API_KEY)
    },
  }).then((response) => {
    return response.json();
  }).catch((error) => {
    console.error(error);
    return error;
  })

  const baseResponsesUrl = 'https://requests.prod.judit.io/responses';
  const responsesUrl = CNJ ? `${baseResponsesUrl}?request_id=${requestsResult.page_data[0].request_id}` : baseResponsesUrl;
  const responsesResult: RequestSearchResponse = await fetch(responsesUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'api-key': String(process.env.API_KEY)
    },
  }).then((response) => {
    return response.json();
  }).catch((error) => {
    console.error(error);
    return error;
  })

  return NextResponse.json(responsesResult);
}