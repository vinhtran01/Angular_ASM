import { Injectable } from '@angular/core';
// import { productData } from '../data';
// import { Product } from '../product/product-inteface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product/product-inteface';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // products = productData;
  API: string = 'https://60ef9eb5f587af00179d3a69.mockapi.io/Product';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API);
    // return this.products
  }

  addProduct(product: Product) {
    return this.http.post<Product>(this.API, product)
  }

  removeProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.API}/${id}`);
  }

  getDetail(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.API}/${id}`)
  }

  updateProduct(data: Product): Observable<Product> {
    return this.http.put<Product>(`${this.API}/${data.id}`, data)
  }
}
