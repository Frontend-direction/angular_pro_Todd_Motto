import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// containers
import { SheduleComponent } from './containers/shedule/shedule.component';

export const ROUTES: Routes = [
  { path: '', component: SheduleComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    SheduleComponent
  ]
})
export class ScheduleModule {}