import { Injectable } from '@angular/core';
import { Store } from 'store';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { tap } from 'rxjs/operators';

export interface User {
  email: string,
  uid: string,
  authenticated: boolean
}

@Injectable()
export class AuthService {

  constructor(
    private af: AngularFireAuth,
    private store: Store,
  ) {}

  auth$ = this.af.authState
  .pipe(
    tap(next => {
      if (!next) {
        this.store.set('user', null);
        return;
      }
      const user: User = {
        email: next.email,
        uid: next.uid,
        authenticated: true
      };
      this.store.set('user', user);
    })
  )

  createUser(email: string, password: string) {
    return this.af.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    return this.af
      .signInWithEmailAndPassword(email, password);
  }

}