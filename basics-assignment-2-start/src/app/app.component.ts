import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
  clickable: boolean = false;

  clearString(){
    this.username = '';
    this.clickable = false;
  }

  checkEmpty(event){
    if ((<HTMLInputElement>event.target).value == ''){
      this.clickable = false;
    }else{
      this.clickable = true;
    }
  }
}
