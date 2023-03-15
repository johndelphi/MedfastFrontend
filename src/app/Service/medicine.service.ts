import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { medicine } from '../models/medicine.model';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  baseUrl =''
  constructor(private http : HttpClient) { }

  getAllproducts(): Observable<medicine[]>{
   return  this.http.get<medicine[]>(this.baseUrl);

  }


}
