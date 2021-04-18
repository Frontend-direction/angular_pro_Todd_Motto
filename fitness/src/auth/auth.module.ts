import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// third party
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

// Shared
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'login'
      },
      {
        path: 'login',
        loadChildren:  () => import('./login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren:  () => import('./register/register.module').then(m => m.RegisterModule)
      }
    ]
  }
];

export const firebaseConfig = {
  apiKey: "AIzaSyCXz7GrHLBs-xlsCrr185iG4v4UrNreq2Y",
  authDomain: "fitness-app-e668a.firebaseapp.com",
  databaseURL: "https://fitness-app-e668a.firebaseio.com",
  projectId: "fitness-app-e668a",
  storageBucket: "fitness-app-e668a.appspot.com",
  messagingSenderId: "1014564696462"
};

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    SharedModule.forRoot(),
  ],
})
export class AuthModule {}