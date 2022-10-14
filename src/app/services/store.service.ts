import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../utils/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  storeBaseURL = 'https://fakestoreapi.com';
  constructor(private http: HttpClient) {}

  getProducts(limit = '12', sort = 'desc') {
    return this.http.get<Array<Product>>(
      `${this.storeBaseURL}/products?sort=${sort}&limit=${limit}`
    );
  }
}
