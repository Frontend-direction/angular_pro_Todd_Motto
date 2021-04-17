import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../../services/songs.service';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {
  @Input()
  list: Song[];

  constructor() { }

  ngOnInit(): void {
  }

}
