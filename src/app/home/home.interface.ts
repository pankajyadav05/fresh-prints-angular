export interface User {
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface SearchByNameResult {
  total_count: number;
  items: User[];
}

export interface HistoryData {
  searchResult: User;
  searchTerm: string;
}
