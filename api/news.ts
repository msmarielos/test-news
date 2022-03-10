import { ApiLanguage, ApiNewsListResponse, ApiNewsQuery, News } from "../types";

import { getApiUrl } from "./shared";

export async function fetchList(
  query: ApiNewsQuery = {}
): Promise<ApiNewsListResponse> {
  const defaultQuery: ApiNewsQuery = {
    language_id: ApiLanguage.rus,
    lead: true,
    per_page: 9,
  };

  const response = await fetch(
    getApiUrl("news/list/", { ...defaultQuery, ...query })
  );
  const responseParsed = await response.json();

  return responseParsed as ApiNewsListResponse;
}

export async function fetchItem(
  id: number,
  query: ApiNewsQuery
): Promise<News> {
  const list = await fetchList(query);

  return list.news.find((news) => news.id === id)!;
}
