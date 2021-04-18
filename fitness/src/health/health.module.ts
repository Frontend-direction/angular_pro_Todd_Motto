import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: 'schedule', loadChildren: () => import('./schedule/schedule.module').then(mod => mod.ScheduleModule)  },
  { path: 'meals', loadChildren: () => import('./meals/meals.module').then(mod => mod.MealsModule) },
  { path: 'workouts', loadChildren: () => import('./workouts/workouts.module').then(mod => mod.WorkoutsModule) }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class HealthModule {}