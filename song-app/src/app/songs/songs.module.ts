import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SongsFavouritesComponent } from './components/songs-favourites/songs-favourites.component';
import { SongsListenedComponent } from './components/songs-listened/songs-listened.component';
import { SongsPlaylistComponent } from './components/songs-playlist/songs-playlist.component';
import { SongsService } from './services/songs.service';
 

@NgModule({
  declarations: [
    SongsFavouritesComponent,
    SongsListenedComponent,
    SongsPlaylistComponent
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