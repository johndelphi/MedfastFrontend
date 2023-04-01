import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Medicine{
  
  medicineName: string,
  medicineDescription: string,
  price: number;
  category: string;
  imageUrl: string;
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiBaseUrl = 'https://localhost:7070/api'; 

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
      const searchUrl = `${this.apiBaseUrl}/medicines/Search?name=${searchTerm}`;
    return this.http.get<Medicine[]>(searchUrl);
  }
  // Add more methods for other API requests as needed, such as updating a user's profile or adding products to a shopping cart.
}
