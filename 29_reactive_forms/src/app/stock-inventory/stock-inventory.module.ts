import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.components';
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';
import { HttpClientModule } from '@angular/common/http';
import {StockInventoryService } from './services/stock-inventory.service';

@NgModule({
  declarations: [
    StockInventoryComponent,
    StockBranchComponent,
    StockProductsComponent,
    StockSelectorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers:[
    StockInventoryService,
  ],
  exports: [
    StockInventoryComponent
  ]
})
export class StockInventoryModule {}