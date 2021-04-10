import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route, PreloadingStrategy } from '@angular/router';

import { Observable } from 'rxjs';
import { of } from 'rxjs'; 
import { AuthGuard } from './auth/auth.guard';

export class CustomPreload implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? fn() : of(null);
  }
}

const routes: Routes = [
  {
    path: 'dashboard', canLoad: [AuthGuard],data: { preload: false }, loadChildren:  () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { 
    path: '**', 
    redirectTo: 'mail/folder/inbox' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreload })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
