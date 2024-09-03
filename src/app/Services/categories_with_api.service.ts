import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ICategory } from '../Models/i-category';

@Injectable({
  providedIn: 'root',
})
export class Categories_with_apiService {
  baseUrl: string = `${environment.baseUrl}/categories`;
  constructor(private httpClient: HttpClient) {}

  //? get all categories
  getAllCategories(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(this.baseUrl);
  }
  //? get category by id
  getCategoryByID(id: number): Observable<ICategory> {
    return this.httpClient.get<ICategory>(`${this.baseUrl}/${id}`);
  }
}
