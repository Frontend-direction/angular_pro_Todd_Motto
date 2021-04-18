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
  apiKey: "AIzaSyC0Al29L1oI9OyRwS8nINnEVXipEZSWx1E",
  authDomain: "fitness-app-58c0b.firebaseapp.com",
  databaseURL: "https://fitness-app-58c0b-default-rtdb.firebaseio.com",
  projectId: "fitness-app-58c0b",
  storageBucket: "fitness-app-58c0b.appspot.com",
  messagingSenderId: "304258463680",
  appId: "1:304258463680:web:85118a28efea17ac61fa25"
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