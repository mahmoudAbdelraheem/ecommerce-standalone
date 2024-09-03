import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/i-product';

@Injectable({
  providedIn: 'root',
})
export class Products_with_apiService {
  baseUrl: string = `${environment.baseUrl}/products`;
  constructor(private httpClient: HttpClient) {}

  getAllProductsData(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.baseUrl);
  }

  getProductByID(id: number): Observable<IProduct | undefined> {
    return this.httpClient.get<IProduct>(`${this.baseUrl}/${id}`);
  }

  getProductsByCategoryID(id: number): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${this.baseUrl}?category_id=${id}`);
  }

  deleteProdutcByID(id: number): Observable<IProduct> {
    return this.httpClient.delete<IProduct>(`${this.baseUrl}/${id}`);
  }

  addNewProduct(newProduct: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(this.baseUrl, newProduct);
  }
  updateProduct(newProduct: IProduct): Observable<IProduct> {
    return this.httpClient.put<IProduct>(`${this.baseUrl}/${newProduct.id}`, newProduct);
  }

  
}
