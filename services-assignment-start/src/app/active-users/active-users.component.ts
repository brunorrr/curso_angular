import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersService: UsersService){
    this.usersService.userChangedToActive.subscribe(
      (users: string[]) => this.users = users
    )
  }

  ngOnInit(){
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.setUserToInactive(id);
  }
}
