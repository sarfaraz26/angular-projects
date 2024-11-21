import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {

  @Output() childMsgEmitter:EventEmitter<string> = new EventEmitter<string>();

  btnChild()
  {
    this.childMsgEmitter.emit("Yes, I'll take care of your family");
  }

}
