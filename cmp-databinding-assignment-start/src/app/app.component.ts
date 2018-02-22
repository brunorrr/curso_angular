import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenList = [];
  oddList = [];
  
  onNumberGenerated( number: number ){
    //Even
    if( number % 2 === 0 )
      this.evenList.push( number );
    //Odd
    else
      this.oddList.push( number );
  }
}
