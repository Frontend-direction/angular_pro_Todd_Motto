import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '../../../store';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-songs-playlist',
  templateUrl: './songs-playlist.component.html',
  styleUrls: ['./songs-playlist.component.scss']
})
export class SongsPlaylistComponent implements OnInit {

  playlist$: Observable<any[]>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private songsService: SongsService
  ) {}

  ngOnInit() {
    this.playlist$ = this.store.select('playlist');
    this.subscription = this.songsService.getPlaylist$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
