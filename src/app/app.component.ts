import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  parentsWord : string = ""; 
  receivedFromChild : string = "";

  btnSendMsg()
  {
    this.parentsWord = " Yo son, Take care of your family.";    
  }

  updateChildMsgInParent(msg : string)
  {
    this.receivedFromChild = msg;
  }
}
