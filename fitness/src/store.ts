import { BehaviorSubject, Observable } from 'rxjs';

import { pluck } from 'rxjs/operators';


import { User } from './auth/shared/services/auth/auth.service';
import { Meal } from './health/shared/services/meals/meals.service';
import { Workout } from './health/shared/services/workout/workout.service';
import { ScheduleItem } from './health/shared/services/schedule/shedule.service';

export interface State {
  user: User,
  meals: Meal[],
  workouts: Workout[],
  schedule: ScheduleItem[],
  selected: any,
  list: any,
  date: Date,
  [key: string]: any
}

const state: State = {
  user: undefined,
  meals: undefined,
  workouts: undefined,
  schedule: undefined,
  selected: undefined,
  list: undefined,
  date: undefined,
};

export class Store {

  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable();

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }

}