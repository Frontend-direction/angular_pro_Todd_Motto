import { Injectable } from '@angular/core';
// third-party modules
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';

import { Store } from 'store';

import { Observable, from, of, EMPTY } from 'rxjs';
import { tap, filter, map } from 'rxjs/operators';

import { AuthService } from '../../../../auth/shared/services/auth/auth.service';

export interface Workout {
  name: string,
  type: string,
  strength: any,
  endurance: any,
  timestamp: number,
  key: string,
  $exists: () => boolean
}

@Injectable()
export class WorkoutService {

  workouts$: Observable<any>;

  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {
    this.getWorkouts();
  }

  get uid() {
    return this.authService.user;
  }

  getWorkout(key: string): Observable<Workout> {
    if (!key) return of({ name: '', type: '', strength: '', endurance: '', timestamp: 0,  key: '', $exists: () => false });
    return this.store.select<Workout[]>('workouts')
    .pipe(
      filter(Boolean),
      map((workouts: Workout[]) => workouts.find((workout: Workout) => workout.key === key))
    )
  }

  async getWorkouts() {
    const user = await this.authService.user;
    this.workouts$ = this.db.list(`workouts/${user.uid}`).snapshotChanges()
    .pipe(
      map(changes => 
        changes.map((c: SnapshotAction<any>) => ({ key: c.payload.key, ...c.payload.val() }))
      ),
      tap(next => this.store.set('workouts', next))
    );
  }

  async addWorkout(workout: Workout) {
    const user = await this.authService.user;
    return this.db.list(`workouts/${user.uid}`).push(workout);
  }

  async updateWorkout(key: string, workout: Workout) {
    const user = await this.authService.user;
    return this.db.object(`workouts/${user.uid}/${key}`).update(workout);
  }

  async removeWorkout(key: string) {
    const user = await this.authService.user;
    return this.db.list(`workouts/${user.uid}`).remove(key);
  }

} 