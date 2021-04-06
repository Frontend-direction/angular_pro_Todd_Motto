import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyForDirective } from './my-for/my-for.directive';
import { FileSizePipe } from './my-pipe/filesize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyForDirective,
    FileSizePipe,
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
