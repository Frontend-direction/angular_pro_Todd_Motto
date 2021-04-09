import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const stock = {
      "cart": [
        { "product_id": 1, "quantity": 10 },
        { "product_id": 3, "quantity": 50 }
      ],
      "products": [
        { "id": 1, "price": 2800, "name": "MacBook Pro" },
        { "id": 2, "price": 50, "name": "USB-C Adaptor" },
        { "id": 3, "price": 400, "name": "iPod" },
        { "id": 4, "price": 900, "name": "iPhone" },
        { "id": 5, "price": 600, "name": "Apple Watch" }
      ]
    }

    const products = [
      { "id": 1, "price": 2800, "name": "MacBook Pro" },
      { "id": 2, "price": 50, "name": "USB-C Adaptor" },
      { "id": 3, "price": 400, "name": "iPod" },
      { "id": 4, "price": 900, "name": "iPhone" },
      { "id": 5, "price": 600, "name": "Apple Watch" }
    ]
    const cart = [
      { "product_id": 1, "quantity": 10 },
      { "product_id": 3, "quantity": 50 }
    ]
    return {stock, cart, products};
  }
}