import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SongsFavouritesComponent } from './components/songs-favourites/songs-favourites.component';
import { SongsListenedComponent } from './components/songs-listened/songs-listened.component';
import { SongsPlaylistComponent } from './components/songs-playlist/songs-playlist.component';
import { SongsService } from './services/songs.service';
import { SongsListComponent } from './components/songs-list/songs-list.component';
 

@NgModule({
  declarations: [
    SongsFavouritesComponent,
    SongsListenedComponent,
    SongsPlaylistComponent,
    SongsListComponent
  ],
  providers: [
    SongsService,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    SongsFavouritesComponent,
    SongsListenedComponent,
    SongsPlaylistComponent
  ]
})

export class SongsModule {}