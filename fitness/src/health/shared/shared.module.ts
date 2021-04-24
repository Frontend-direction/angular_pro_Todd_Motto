import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// third-party modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

import { MealsService } from './services/meals/meals.service';
import { WorkoutService } from './services/workout/workout.service';
import { ListItemComponent } from './components/list-item/list-item.component';

// Pipes
import { JoinPipe } from '../shared/pipes/join.pipe';
import { WorkoutPipe } from '../shared/pipes/workout.pipe';
import { ScheduleService } from './services/schedule/shedule.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFirestoreModule,
    AngularFireModule,
  ],
  declarations: [
    ListItemComponent,
    JoinPipe,
    WorkoutPipe,
  ],
  exports: [
    ListItemComponent,
    JoinPipe,
    WorkoutPipe,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [
        MealsService,
        WorkoutService,
        ScheduleService,
      ]
    };
  }
}