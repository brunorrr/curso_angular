import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ServersService } from '../servers.service';
import { Injectable } from '@angular/core';

interface Server {
    id: number;
    name: string;
    status: string;
}

/*
    Server Resolver is an Angular Resolve
    @see https://angular.io/api/router/Resolve

    It is a service that provides some information
    like a regular service, this provider calls serverService and sends
    into it the server's ID
*/

@Injectable()
export class ServerResolver implements Resolve<Server> {

    constructor(private serverService: ServersService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    // It can return the object, the promise of the object and a observable
    Observable<Server> | Promise<Server> | Server {
        return this.serverService.getServer(Number(route.params['id']));
    }
}
