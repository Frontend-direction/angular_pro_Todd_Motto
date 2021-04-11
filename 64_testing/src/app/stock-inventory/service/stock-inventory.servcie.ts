import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, pipe, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Product, Item } from '../models/product.interface';

@Injectable()
export class StockInventoryService {

  constructor(private http: HttpClient) {}

  getCartItems(): Observable<Item[]> {
    return this.http
      .get<Item[]>('/api/cart')
      .pipe(
        map((response) => response),
        catchError(this.handleError)
      )
  }

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>('/api/products')
      .pipe(
        map((response) => response),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
