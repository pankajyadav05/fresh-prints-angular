import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { HomeService } from '../services/home.service';

@NgModule({
  declarations: [HistoryComponent],
  imports: [CommonModule, HistoryRoutingModule],
})
export class HistoryModule {}
