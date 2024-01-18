export interface RequestSearch {
  search: {
    search_type: 'cpf' | 'cnpj' | 'oab' | 'lawsuit_cnj',
    search_key: string,
  };
}

export interface RequestSearchResponse {
  page: number,
  page_data: RequestResponseData[],
  page_count: number,
  all_count: number,
  all_pages_count: number
}

export interface RequestResponseData {
  request_id: string,
  response_id: string,
  status: 'created' | 'pending' | 'started' | 'cancelling' | 'cancelled' | 'completed',
  created_at: string,
  updated_at: string,
  response_data: {
    name: string,
    '_id': string,
    code: string,
    instance: string,
    secrecy_level: string,
    classifications: {
      code: string
      name: string,
      date: string,
      '_id': string
    }[],
    tribunal_acronym: string,
    distribution_date: string,
    parties: {
      name: string,
      document: string
      document_type: string,
      person_type: string,
    }[]
  }
}

export interface RequestResponseParams {
  params: {
    lawsuitId: string
  };
}

export interface RequestSearchParams {
  params: {
    CNJ?: string,
  };
}

