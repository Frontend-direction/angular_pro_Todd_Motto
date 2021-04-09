import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
 
import { InMemoryDataService } from '../app/stock-inventory/services/memory.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StockInventoryModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
