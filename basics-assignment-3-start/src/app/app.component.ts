import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `.corBranca {
        color: white
    }`
]
})
export class AppComponent {
  displayDetails: boolean = true;
  clickLog = [];

  toggleDetails(){
    this.displayDetails = !this.displayDetails;
    this.clickLog.push( new Date() );
  }
}
