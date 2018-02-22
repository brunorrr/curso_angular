import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

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
export class ServerElementComponent implements 
    OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy {
  /*
    Defining an alias for the property 'element', 
    now 'element' is known 'srvElement' outside of server-element
  */
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() {
    console.log('Constructor has been called.')
  }

  ngOnChanges( changes: SimpleChanges ){
    console.log('ngOnChanges has been called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit has been called.');
  }

  ngDoCheck(){
    console.log('ngDoCheck has been called.');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit has been called.');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked has been called.');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit has been called.');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked has been called.');
  }

  ngOnDestroy(){
    console.log('ngOnDestoy has been called');
  }

}
