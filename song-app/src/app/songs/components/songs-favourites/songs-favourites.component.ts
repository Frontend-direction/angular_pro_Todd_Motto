import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../../../store';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-songs-favourites',
  templateUrl: './songs-favourites.component.html',
  styleUrls: ['./songs-favourites.component.scss']
})
export class SongsFavouritesComponent implements OnInit {

  favourites$: Observable<any[]>;

  constructor(
    private store: Store,
    private songsService: SongsService
  ) {}

  ngOnInit() {
    this.favourites$ = this.store.select('playlist');
  }

}
