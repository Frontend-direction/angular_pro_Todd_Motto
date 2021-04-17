import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '../../store';
import { map, tap } from 'rxjs/operators';

export interface Song {
  id: number,
  name: string,
  listened: boolean,
  favourite: boolean,
  artist: string,
  track: string
}

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
  
    toggle(event: any) {
      this.http
        .put(`/api/playlist/${event.track.id}`, event.track)
        .pipe(
          map(res => res)
        )
        .subscribe((track: Song) => {
          
          const value = this.store.value.playlist;
  
          const playlist = value.map((song: Song) => {
            if (event.track.id === song.id) {
              return { ...song, ...event.track };
            } else {
              return song;
            }
          });
  
          this.store.set('playlist', playlist);
  
        });
    }
}