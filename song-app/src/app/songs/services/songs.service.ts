import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '../../store';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class SongsService {

  constructor(
    private http: HttpClient,
    private store: Store
  ) {}

  getPlaylist$ = this.http
    .get('/api/playlist')
    .pipe(
      map(res => res),
      tap(next => this.store.set('playlist', next))
    )

}