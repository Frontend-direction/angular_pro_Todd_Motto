import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '../../../store';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-songs-listened',
  templateUrl: './songs-listened.component.html',
  styleUrls: ['./songs-listened.component.scss']
})
export class SongsListenedComponent implements OnInit {

  listened$: Observable<any[]>;

  constructor(
    private store: Store,
    private songsService: SongsService
  ) {}

  ngOnInit() {
    this.listened$ = this.store.select('playlist');
  }
}
