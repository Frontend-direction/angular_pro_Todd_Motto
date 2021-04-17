import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*
 var firebaseConfig = {
    apiKey: "AIzaSyC0Al29L1oI9OyRwS8nINnEVXipEZSWx1E",
    authDomain: "fitness-app-58c0b.firebaseapp.com",
    databaseURL: "https://fitness-app-58c0b-default-rtdb.firebaseio.com",
    projectId: "fitness-app-58c0b",
    storageBucket: "fitness-app-58c0b.appspot.com",
    messagingSenderId: "304258463680",
    appId: "1:304258463680:web:85118a28efea17ac61fa25"
  };
  */