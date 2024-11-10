import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //Constructor
  constructor()
  {
  }

  
  //Fields
  enableLGBTViolation : boolean = false;

  drpGenderOptions = [
    {name : 'Male', value : 'Male'},
    {name : 'Female', value : 'Female'},
    {name : 'LGBTQIA++', value : 'Others'}
  ] 

  drpGenderConfig = {
    displayKey: 'name', // Key to display in the dropdown
    search: true,       // Enable search functionality
    height: '200px',    // Set the height of the dropdown
    placeholder: 'Select an option', // Placeholder text
    clearSearchOnClose: true, // Clear search field when dropdown is closed
    moreText: 'more',  // Text for showing more items
    noResultsText: 'No results found', // Text to display when no results are found
    searchPlaceholder: 'Search...', // Placeholder for the search box
  };

  currentYear : number = new Date().getFullYear();


  //Events
  drpGenderOnChange(event : any)
  {
    const {value} = event.value;
    this.enableLGBTViolation = value === 'Others' ? true : false;
  }

  btnSubmit(userForm : NgForm) : void
  {
    if(userForm.valid)
      console.log(userForm.value);    
  }


  //Methods

}
