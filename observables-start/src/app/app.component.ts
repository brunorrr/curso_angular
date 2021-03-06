import { Component, OnInit } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user1Activated = false;
  user2Activated = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.userActivated.subscribe(
      (id: number) => {
        this.user1Activated = id === 1;
        this.user2Activated = id === 2;
      }
    );
  }
}
