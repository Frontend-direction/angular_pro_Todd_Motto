import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
  constructor(private authService: AuthService) {}
  canLoad() {
    return this.authService.checkPermissions();
  }

  canActivate() {
    return this.authService.isLoggedIn();
  }

  canActivateChild() {
    return true;
  }
}