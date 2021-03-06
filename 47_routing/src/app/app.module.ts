import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, CustomPreload } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailModule } from './mail/mail.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mail/services/memory.service';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MailModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [CustomPreload],
  bootstrap: [AppComponent]
})
export class AppModule { }
