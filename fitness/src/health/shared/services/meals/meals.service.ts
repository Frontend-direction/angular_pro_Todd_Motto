import { Injectable } from '@angular/core';
// third-party modules
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';

import { Store } from 'store';

import { Observable, from, of, EMPTY } from 'rxjs';
import { tap, filter, map } from 'rxjs/operators';

import { AuthService } from '../../../../auth/shared/services/auth/auth.service';

export interface Meal {
  name: string,
  ingredients: string[],
  timestamp: number,
  key: string,
  $exists: () => boolean
}

@Injectable()
export class MealsService {

  meals$: Observable<any>;

  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {
    this.getMeals();
  }

  get uid() {
    return this.authService.user;
  }

  getMeal(key: string): Observable<Meal> {
    if (!key) return of({ name: '', ingredients: [], timestamp: 0, key: '', $exists: () => false });
    return this.store.select<Meal[]>('meals')
    .pipe(
      filter(Boolean),
      map((meals: Meal[]) => meals.find((meal: Meal) => meal.key === key))
    )
  }

  async getMeals() {
    const user = await this.authService.user;
    this.meals$ = this.db.list(`meals/${user.uid}`).snapshotChanges()
    .pipe(
      map(changes => 
        changes.map((c: SnapshotAction<any>) => ({ key: c.payload.key, ...c.payload.val() }))
      ),
      tap(next => this.store.set('meals', next))
    );
  }

  async addMeal(meal: Meal) {
    const user = await this.authService.user;
    return this.db.list(`meals/${user.uid}`).push(meal);
  }

  async updateMeal(key: string, meal: Meal) {
    const user = await this.authService.user;
    return this.db.object(`meals/${user.uid}/${key}`).update(meal);
  }

  async removeMeal(key: string) {
    const user = await this.authService.user;
    return this.db.list(`meals/${user.uid}`).remove(key);
  }

} 