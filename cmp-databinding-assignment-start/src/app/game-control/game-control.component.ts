import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent{
  @Output() incrementEvent = new EventEmitter<{increment: number}>();
  counterHolder:number = 0;
  startDisabled: boolean = false;
  ref;

  startIncrement(){
    this.ref = setInterval(() => {this.incrementEvent.emit({increment: ++this.counterHolder})}, 1000);
    this.startDisabled = true;
  }

  clearEmitInterval(){
    clearInterval(this.ref);
    this.startDisabled = false;
  }

}
