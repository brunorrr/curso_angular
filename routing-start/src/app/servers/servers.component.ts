import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: {id: number, name: string, status: string}[] = [];

  /*
    Using dependency injection to get the Router module and get the current route
  */
  constructor(private serversService: ServersService,
      private router: Router,
      private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // Passing the requested route and the scope, which is the current route
    this.router.navigate(['servers'], {relativeTo: this.activeRoute});
  }

}
