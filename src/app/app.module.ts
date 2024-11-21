import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './childs/first/first.component';
import { SecondComponent } from './childs/second/second.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
  ],
  imports: [
    BrowserModule,
    SelectDropDownModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
