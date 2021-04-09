import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Product } from '../../models/product.interface';
 
@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent implements OnInit {

  @Input()
  parent: FormGroup;

  @Input()
  map: Map<number, Product>;

  @Output()
  removed = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }

  getProduct(id: number): Product {
    return this.map.get(id);
  }

  onRemoved(item, index) {
    this.removed.emit({ item, index })
  }
}
