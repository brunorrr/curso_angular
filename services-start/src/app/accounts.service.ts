import { LoggingService } from "./logging.service";
import { Injectable } from "@angular/core";

/*
    With the decorator Injectable this service can use other services,
    what means that other services can be injected into this service
*/

@Injectable()
export class AccountsService{
    accounts = [
    {
        name: 'Master Account',
        status: 'active'
    },
    {
        name: 'Testaccount',
        status: 'inactive'
    },
    {
        name: 'Hidden Account',
        status: 'unknown'
    }
    ];

    // If we want to access another service we need to pass the service as an argumento to the constructor
    constructor( private loggingService: LoggingService) {}

    addAccount( name: string, status: string ){
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status);
    }

    updateStatus( id: number, status: string ){
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}