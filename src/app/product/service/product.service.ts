import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "../model/product";
import {Observable, of} from "rxjs";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_PATH = '/api';
  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${(this.BASE_PATH)}/products`);
  }
  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${(this.BASE_PATH)}/products/${id}`);
  }
  create(product: Product) {
    return this.http.post<Product>(`${this.BASE_PATH}/products`, product);
  }
  update(product: Product) {
    return this.http.put<Product>(`${this.BASE_PATH}/products/${product.id}`, product);
  }
  delete(id: string): void {
    const header: HttpHeaders = new HttpHeaders({
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
    });
    this.http.delete(`${(this.BASE_PATH)}/products/${id}`, {headers: header})
      .subscribe({
        next: data => {
          console.log(data);
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
  }
}
