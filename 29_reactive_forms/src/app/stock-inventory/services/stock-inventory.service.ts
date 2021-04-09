import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { Item } from '../models/product.interface';


@Injectable()
export class StockInventoryService {
  
  constructor(
    private http: HttpClient,
  ){}

  getCartItem(): Observable<any> {
    return this.http.get('/api/cart')
    .pipe(
      map((response: Response) => response)
    )
  }

  getProducts(): Observable<any> {
    return this.http.get('/api/products')
    .pipe(
      map((response: Response) => response)
    )
  }

  checkBranchId(id: string): Observable<boolean> {
    return this.http
      .get('/api/branches', { params: { id: id }})
      .pipe(
        map((response: any) => !!response.length)
        )
  }
}
