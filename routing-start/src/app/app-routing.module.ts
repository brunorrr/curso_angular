import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';

/*
  This is a constant array that contains all routes of our app,
  It's a Routes type, inside it we have an object with two information about the route,
  the path witch is the HTTP path that is showed in address bar,
  the component witch is called when the path is set on URL

  Using servers as a parent path

  PS: this constant do not modify the app by itself, this needs to be used by NgModule decorator

  ** catch all routes that are not covered by the module
*/
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ] },
    /*
      canActivate is a method that returns the permission of the user to access this path
      canActivate only returns true or false, in this case the canActivate interface is implemented
      by AuthGuard
    */
    { path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent, children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent }
    ] },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
  ];

@NgModule({
  imports: [
      /*
        Importing RouterModule from Angular,
        The module is get by the method forRoot inside RouterModule and we pass the appRoutes as an argument to this method
      */
    RouterModule.forRoot( appRoutes )
  ],
  // Exporting RouterModule with configurations
  exports: [RouterModule]
})
export class AppRountingModule {
}
