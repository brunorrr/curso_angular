import { Component, OnInit } from '@angular/core';
/*
  For Angular 5- use import { Observable } from 'rxjs/Observable';
*/
import { interval, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const myNumbers = interval(1000);
    // myNumbers.subscribe(
    //   (number: number) => {
    //     console.log(number);
    //   }
    // );
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('First package');
      }, 2000);
      setTimeout(() => {
        observer.next('Second package');
      }, 4000);
      setTimeout(() => {
        // observer.error('This does not work');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.error('This does not work');
      }, 6000);
    });
    myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      // The complete method is always the last method called
      () => {
        console.log('completed');
      }
    );
  }

}
