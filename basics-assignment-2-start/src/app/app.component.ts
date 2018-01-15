import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName:string = 'unnamed user';

  isUserNameEmpty(){
    return this.userName.length == 0;
  }

  clearUserName(){
    this.userName = '';
  }

}
