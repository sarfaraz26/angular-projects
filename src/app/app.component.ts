import { Component, OnInit } from '@angular/core';
import hero from './hero';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  heroes : hero[] = []

  constructor(private service : AppService){}

  // events
  ngOnInit() {
    this.getHeroesFromAPI();
  }

  containerScroll(event : any)
  {
    if(this.service.itemsCount !== this.service.pageSize)
    {
      this.service.pageSize += 10;
      this.getHeroesFromAPI();
    }
  }


  // methods
  getHeroesFromAPI()
  {
    this.service.getHeroes().subscribe(
      res => {
        this.heroes = res;
      },
      err => {
        console.log(err);
      }
    )
  }

}

