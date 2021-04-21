import { Injectable } from '@angular/core';
// third-party modules
import { AngularFireDatabase } from '@angular/fire/database';

import { Store } from 'store';

import { Observable, from } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from '../../../../auth/shared/services/auth/auth.service';

export interface Meal {
  name: string,
  ingredients: string[],
  timestamp: number,
  $key: string,
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

  async getMeals() {
    const user = await this.authService.user;
    this.meals$ = this.db.list(`meals/${user.uid}`).valueChanges()
    .pipe(
      tap(next => this.store.set('meals', next))
    );
  }

} 