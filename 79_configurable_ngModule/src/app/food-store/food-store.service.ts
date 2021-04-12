import { Inject, Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { FOOD_STORE_CONFIG, FoodStoreConfig } from './config';

@Injectable()
export class FoodStoreService {
  constructor(
    private http: HttpClient,
    @Inject(FOOD_STORE_CONFIG) private config: FoodStoreConfig
  ) {}

  getStore() {
    const headers = new HttpHeaders()
    .append('id', (this.config.storeId).toString())
    .append('token', this.config.storeToken)

    return this.http.get(`/api/stores`, { headers })
    .pipe(
      map((res) => res[0])
    )
  }
}
