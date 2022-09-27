import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  baseUrl="http://localhost:3000"
  constructor(private http:HttpClient) { }

  getCountries():Observable<string>{
    return this.http.get<any>(`${this.baseUrl}/countries`);
  }

  getCities(searchText:any):Observable<string>{
    return this.http.get<any>(`${this.baseUrl}/cities?name_like=^${searchText}`);
  }
}
