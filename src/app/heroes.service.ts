import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import HeroModel from './heroModel';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  
  url : string = "http://localhost:3000/heroes?_page=1&_per_page=10";

  constructor(private http : HttpClient) { }

  getHeroes() : Observable<any>
  {
    return this.http.get<any>(this.url);
  }
}
