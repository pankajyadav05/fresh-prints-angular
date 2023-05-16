import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SearchByNameResult, HistoryData } from '../home/home.interface';
import { environment } from 'src/environments/environment';

const routes = {
  searchByName: (name: string) =>
    'https://api.github.com/search/users?q=' + name,
};

@Injectable({ providedIn: 'root' })
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  searchByName(name: string): Observable<SearchByNameResult> {
    return this.httpClient.get<SearchByNameResult>(
      routes.searchByName(encodeURI(name))
    );
  }

  saveHistory(searchData: HistoryData[]) {
    localStorage.setItem(
      environment.localstorageKey,
      JSON.stringify(searchData)
    );
  }

  getHistory(): HistoryData[] {
    return JSON.parse(
      localStorage.getItem(environment.localstorageKey) || '[]'
    );
  }

  clearHistory() {
    localStorage.removeItem(environment.localstorageKey);
  }
}
