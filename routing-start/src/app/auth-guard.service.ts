import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

// Injectable marks this service as a service consumer
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    /*
        canAcivate is a method of CanActivate interface
        you can return true or false, in this case the method calls a service with a promise with the return value
        @See https://angular.io/api/router/CanActivate#canActivate
    */
    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated().then(
            (authenticated: boolean) => {
                if ( authenticated ) {
                    return true;
                } else {
                    this.router.navigate(['/']);
                }
            }
        );
    }
}
