import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customPropertyValue: string = "Custom property value defined in parent!";
  triggerCustomEvent(eventInfo){
    console.log('ok');
    alert(eventInfo.eventContent);
  }
}
