import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Store } from 'store';
import { ScheduleService } from '../../../shared/services/schedule/shedule.service';


@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.scss']
})
export class SheduleComponent implements OnInit, OnDestroy {

  date$: Observable<Date>;
  subscriptions: Subscription[] = [];

  constructor(
    private store: Store,
    private scheduleService: ScheduleService
  ) { }

  ngOnInit(): void {
    this.date$ = this.store.select('date');

    this.subscriptions = [
      this.scheduleService.schedule$.subscribe(),
    ];
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  changeDate(date: Date) {
    this.scheduleService.updateDate(date);
  }
}
