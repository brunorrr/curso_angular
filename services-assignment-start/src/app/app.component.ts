import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './counterservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, CounterService]
})
export class AppComponent {

  changes:number = 0;

  constructor( private counterService:CounterService ){
    this.counterService.changeAdded.subscribe(
      (changesNumber: number) => this.changes = changesNumber
    )
  }

}
