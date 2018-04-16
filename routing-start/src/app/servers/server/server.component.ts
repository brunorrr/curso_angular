import { Component, OnInit, OnDestroy } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy {
  server: {id: number, name: string, status: string};
  routeObserver: Subscription;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    /*
      Whenever the server id path params changes this method(inside subscribe)
      will be called, ServerComponent has been injected with the server provider by
      app Module, and this instance can be accessed by data['name of the instance'],
      in this case data['server']
    */
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );

    // Making sure that the ID is a number
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.routeObserver = this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(
    //       +params['id']
    //     );
    //   }
    // );
  }

  ngOnDestroy() {
    this.routeObserver.unsubscribe();
  }

  onEdit() {
    /*
      queryParamsHandling allows you to deal with the current query string,
      if you don't set this parameter The query will be reseted when the current view changes to this.
      @see https://angular.io/api/router/NavigationExtras
    */
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
