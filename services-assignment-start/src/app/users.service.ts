import { EventEmitter, Injectable } from "@angular/core";
import { CounterService } from "./counterservice.service";

@Injectable()
export class UsersService {

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    userChangedToActive = new EventEmitter<string[]>();
    userChangedToInactive = new EventEmitter<string[]>();

    constructor( private counterService: CounterService ){}

    setUserToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.addChange();
        this.userChangedToInactive.emit(this.inactiveUsers);
    }

    setUserToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.addChange();
        this.userChangedToActive.emit(this.activeUsers);
    }
}