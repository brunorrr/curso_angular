import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  /*
    Defining style encapsulation's value to None
    On this way 'app' styles will affect 'server-element' elements
    @see https://angular.io/api/core/ViewEncapsulation
  */
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  /*
    Defining an alias for the property 'element', 
    now 'element' is known 'srvElement' outside of server-element
  */
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit() {
  }

}
