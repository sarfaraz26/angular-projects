import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import HeroModel from './heroModel';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  
  url : string = "http://localhost:3000/heroes";
  filter : string = "";

  constructor(private http : HttpClient) { }

  getHeroes() : Observable<any>
  {
    return this.http.get<any>(this.url + this.filter);
  }

  getComicsAndCities() : Observable<any>
  {
    return this.http.get<any>(this.url);
  }
}
