import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// third party
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

// Shared
import { SharedModule } from './shared/shared.module';
import { firebaseConfig } from './config';

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