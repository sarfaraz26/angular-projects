import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HeroesService } from './heroes.service';
import HeroModel from './heroModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  heroes : HeroModel[] = [];
  cities : string[] = [];
  comics : string[] = [];

  pageNumber : number = 1;
  pageSize : number = 10;


  constructor(private heroService : HeroesService){}

 ngOnInit(): void {
    this.heroService.filter = `?_page=${this.pageNumber}&_limit=${this.pageSize}`;
    this.getHeroes();
    this.getComicsAndCities();
 }

 btnPrev()
 {
  this.pageNumber -= 1;
  this.heroService.filter = this.heroService.filter.replace(`_page=${this.pageNumber + 1}`, `_page=${this.pageNumber}`)
  this.getHeroes();
}

 btnNext()
 {
  this.pageNumber += 1;
  this.heroService.filter = this.heroService.filter.replace(`_page=${this.pageNumber - 1}`, `_page=${this.pageNumber}`)
  this.getHeroes();
 }

 drpSortChange(event : any)
 {
  if(this.heroService.filter.includes("_order"))
  { 
    let beforeChange = event.target.value === 'asc' ? 'desc' : 'asc';
    let expectedChange = event.target.value;
    this.heroService.filter.replace(`_order=${beforeChange}`, `_order=${expectedChange}`) 
  }
  else
  {
    this.heroService.filter += `&_sort=name&_order=${event.target.value}`
  }
  this.getHeroes();    
 }

 chkComicChange(event : any)
 {
  this.checkBoxChangeEvent(event.target.name, 'comic');
 }

 chkLocationChange(event : any)
 {
  this.checkBoxChangeEvent(event.target.name, 'location');
 }


 numItemsPerPageChange(event : any)
 {
  const prevPageSize = this.pageSize;
  this.pageSize = event.target.value;
  this.heroService.filter = this.heroService.filter.replace(`_limit=${prevPageSize}`,`_limit=${this.pageSize}`);
  this.getHeroes();
 }

 getHeroes() : void
 {
  this.heroService.getHeroes().subscribe(
    res => {
      this.heroes = res;
    },
    err => {
      console.log(err);
    }
   )
 }

 getComicsAndCities() : void
 {
  this.heroService.getComicsAndCities().subscribe(
    res => {
      const heroes : HeroModel[] = res;
      this.cities = [...new Set(heroes.map(hero => hero.location))];
      this.comics = [...new Set(heroes.map(hero => hero.comic))];
    },
    err => {
      console.log(err);
    }
   )
 }

 checkBoxChangeEvent(item : string, param : string)
 {
  this.heroService.filter += `&${param}=${item}`
  this.getHeroes();
 }


}
