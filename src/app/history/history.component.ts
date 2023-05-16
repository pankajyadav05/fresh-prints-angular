import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { HistoryData } from '../home/home.interface';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  searchHistory: HistoryData[] = [];

  ngOnInit(): void {
    this.searchHistory = this.homeService.getHistory();
  }

  clearHistory() {
    this.homeService.clearHistory();

    this.searchHistory = [];
  }
}
