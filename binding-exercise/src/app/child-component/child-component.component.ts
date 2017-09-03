import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

  @Input() customProperty: { value: string};
  @Output() customEvent = new EventEmitter<{eventContent: string}>();
  eventContent:string = "This content was defined in the child component!";
  
  fireCustomEvent(){
    this.customEvent.emit({eventContent: this.eventContent});
  }
}
