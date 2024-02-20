export interface SourceInterface {
  id: string;
  name: string;
}
export interface ArticlesInterface {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: SourceInterface;
  title: string;
  url: string;
  urlToImage: string;
}
export interface DataInterface {
  articles: ArticlesInterface[];
  status: string;
  totalResults: number;
}
