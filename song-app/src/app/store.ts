import { BehaviorSubject, Observable } from 'rxjs';
import { State } from './state';
import { pluck } from 'rxjs/operators';

const state: State = {
  playlist: undefined,
}


export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable();

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  set(name: string, state: any ) {
    this.subject.next({
      ...this.value, [name]: state
    })
  }
}