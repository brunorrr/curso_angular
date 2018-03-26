import { Component, OnInit, OnDestroy } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';
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
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Making sure that the ID is a number
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.routeObserver = this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(
          +params['id']
        );
      }
    );
  }

  ngOnDestroy() {
    this.routeObserver.unsubscribe();
  }

}
