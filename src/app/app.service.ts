import { Injectable } from '@angular/core';
import environment from '../../environments/environment';
import { Observable } from 'rxjs';
import hero from './hero';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  pageNumber : number = 1;
  pageSize : number = 23;
  itemsCount = 100;

  constructor(private http : HttpClient) { }

  getHeroes() : Observable<hero[]>
  {    
    return this.http.get<hero[]>(`${environment.baseURL}?_page=${this.pageNumber}&_limit=${this.pageSize}`);
  }
}
