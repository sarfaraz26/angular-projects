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

  constructor(private heroService : HeroesService){}

 ngOnInit(): void {
   this.heroService.getHeroes().subscribe(
    res => {
      this.heroes = res.data;
    },
    err => {
      console.log(err);
    }
   )
 }

}
