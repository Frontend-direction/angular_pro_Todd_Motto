import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/shared/guards/auth.guard';
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
  { 
    path: 'schedule',
    canActivate: [AuthGuard], 
    loadChildren: () => import('./schedule/schedule.module').then(mod => mod.ScheduleModule)  },
  { 
    path: 'meals',
    canActivate: [AuthGuard], 
    loadChildren: () => import('./meals/meals.module').then(mod => mod.MealsModule) 
  },
  {
    path: 'workouts',
    canActivate: [AuthGuard],
    loadChildren: () => import('./workouts/workouts.module').then(mod => mod.WorkoutsModule) 
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule.forRoot(),
  ],
  providers: [
    AuthGuard
  ]
})
export class HealthModule {}