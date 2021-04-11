import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';
import { forkJoin, Observable } from 'rxjs';
import { Product, Item } from '../../models/product.interface';
import { StockInventoryService } from '../../services/stock-inventory.service';  
import { StockValidators } from './stock-inventory.validators';
import { map, tap } from 'rxjs/operators';
import { StockCounterComponent } from '../../components/stock-counter/stock-counter.component'

@Component({
  selector: 'stock-inventory',
  styleUrls: ['stock-inventory.component.scss'],
  templateUrl: 'stock-inventory.component.html',
})
export class StockInventoryComponent implements OnInit {
  productMap: Map<number, Product>;

  products: Product[];

  total: number;

  form = this.fb.group({
    store: this.fb.group({
      branch: ['', [Validators.required, StockValidators.checkBranch], [this.validateBranch.bind(this)]],
      code: ['', Validators.required],
    }),
    selector: this.createStock({}),
    stock: this.fb.array([]),
  }, { validators: StockValidators.checkStockExists});

  constructor(
    private fb: FormBuilder,
    private stockService: StockInventoryService,
    ) {}

    ngOnInit() {
      const cartItems = this.stockService.getCartItem();
      const products = this.stockService.getProducts();

      forkJoin([cartItems, products])
      .subscribe(([cart, products]: [Item[], Product[]]) => {
        
        const myMap = products
          .map<[number, Product]>(product => [product.id, product]);
        
        this.productMap = new Map<number, Product>(myMap);
        this.products = products;
        cart.forEach(item => this.addStock(item));
        
        this.calculateTotal(this.form.get('stock').value);
        this.form.get('stock')
        .valueChanges
        .subscribe(val => this.calculateTotal(val))
      });
      
    }
  
  calculateTotal(value: Item[]) {
    const total = value.reduce((prev, next) => prev + (next.quantity * this.productMap.get(next.product_id).price), 0);
    this.total= total;
  }

  createStock(stock) {
    return this.fb.group({
      product_id: parseInt(stock.product_id, 10) || '',
      quantity: stock.quantity || 10
    })
  }

  addStock(event) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(event));
  }

  removeStock({ item, index }: { item: FormGroup, index: number } ) {
    console.log(item, index)
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }

  onSubmit() {
    console.log(this.form.value);
  }

  validateBranch(control: AbstractControl) {
    return this.stockService
      .checkBranchId(control.value)
      .pipe(
        map((response: boolean) => response ? null : { unknownBranch: true })
      )
  }
}