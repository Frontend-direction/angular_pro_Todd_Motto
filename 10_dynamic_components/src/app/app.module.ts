import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthFormModule } from './auth-form/auth-form.module';

import { AppComponent } from './app.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateRefComponent
  ],
  imports: [
    BrowserModule,
    AuthFormModule
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    AuthFormComponent,
  ]
})
export class AppModule {}
