import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { AuthFormComponent } from './containers/auth-form/auth-form.component.ts';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AuthFormComponent,
  ],
  providers: [],
  exports: [
    AuthFormComponent
  ]
})
export class LoginModule {}