import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Medicine } from './models/Medicine.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiBaseUrl = environment.apiBaseUrl; 

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/register`, userData);
  }

  loginUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/login`, userData);
  }

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/products`);
  }

  getProductDetails(productId: number): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/products/${productId}`);
  }
  getProduct(productId: string) {
    return this.http.get(`${this.apiBaseUrl}/products/${productId}`);
  }

  searchProducts(searchTerm: string) :Observable<Medicine[]> {
      const searchUrl = `${this.apiBaseUrl}/api/Medicines/Search?name=${searchTerm}`;
    return this.http.get<Medicine[]>(searchUrl);
  }
  // Add more methods for other API requests as needed, such as updating a user's profile or adding products to a shopping cart.
}
