import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from 'store';

import { Observable, Subscription } from 'rxjs';

import { Meal, MealsService } from '../../../shared/services/meals/meals.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit {

  meals$: Observable<Meal[]>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private mealsService: MealsService
  ) {}

  ngOnInit() {
    this.meals$ = this.store.select<Meal[]>('meals');
    this.subscription = this.mealsService.meals$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeMeal(event: Meal) {
    this.mealsService.removeMeal(event.key);
  }
}
