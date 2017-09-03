import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  evenComponentArr: number[] = [];
  oddComponentArr: number[] = [];
  showStartMessage: boolean = true;
  generateNewComponent(evt){
    this.showStartMessage = false;
    if (evt.increment % 2 === 0){
      this.evenComponentArr.push(evt.increment);
    }else{
      this.oddComponentArr.push(evt.increment);
    }
  }

}
