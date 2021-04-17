import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output()
  toggle = new EventEmitter<any>();

  toggleItem(index: number, prop: string) {
    const track = this.list[index];
    this.toggle.emit({
      track: { ...track, [prop]: !track[prop] }
    });
  }

}
