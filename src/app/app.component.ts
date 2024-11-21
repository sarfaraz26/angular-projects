import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  parentsWord : string = "Take care of your Family"; 

  ngOnInit()
  {
    this.parentsWord += ",Sons and GrandSons.";
  }
}
