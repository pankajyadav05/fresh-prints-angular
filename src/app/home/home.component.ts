import { Component, OnInit } from '@angular/core';
import { HistoryData, User } from './home.interface';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HomeService } from '../services/home.service';
import { finalize } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name!: string;
  total!: number;

  loading = false;
  submitted = false;
  currentIndex = 0;

  searchHistory: HistoryData[] = [];

  users!: User[];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.searchHistory = this.homeService.getHistory();
  }

  searchByName() {
    this.submitted = true;
    this.loading = true;

    this.homeService
      .searchByName(this.name)
      .pipe(
        finalize(() => {
          this.loading = false;
          this.currentIndex = 0;
        }),
        untilDestroyed(this)
      )
      .subscribe(({ total_count, items }) => {
        this.total = total_count;
        this.users = items;

        this.saveHistory();
      });
  }

  showPrevUser() {
    if (this.currentIndex === 0) return;

    this.currentIndex--;
  }

  showNextUser() {
    if (this.currentIndex === this.total - 1) return;

    if (this.currentIndex !== 0) this.saveHistory();

    this.currentIndex++;
  }

  saveHistory() {
    this.searchHistory.push({
      searchTerm: this.name,
      searchResult: this.users[this.currentIndex],
    });

    this.homeService.saveHistory(this.searchHistory);
  }
}
