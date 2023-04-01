import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/api'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  loginUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, userData);
  }

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`);
  }

  getProductDetails(productId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/products/${productId}`);
  }
  getProduct(productId: string) {
    return this.http.get(`${this.apiUrl}/products/${productId}`);
  }

  searchProducts(searchTerm: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products?search=${searchTerm}`);
  }
  // Add more methods for other API requests as needed, such as updating a user's profile or adding products to a shopping cart.
}
