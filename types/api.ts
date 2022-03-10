import { News } from "./news";

export enum ApiLanguage {
  rus = 1,
  eng = 2,
}

export type ApiNewsListResponse = {
  news: News[];
  category: number;
  total: number;
  page: number;
  per_page: number;
  last_page: number;
};

export type ApiNewsQuery = {
  per_page?: number;
  language_id?: ApiLanguage;
  lead?: boolean;
};
