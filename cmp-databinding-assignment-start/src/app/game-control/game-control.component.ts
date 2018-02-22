import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  intervalId;
  @Output('numberGenerated') eventEmiter = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onGameStart(){
    if( this.intervalId === undefined )
      this.intervalId = setInterval(() => this.onGererateNumber(this), 1000);
  }

  onGameStop(){
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }

  onGererateNumber( obj: GameControlComponent ){
    obj.eventEmiter.emit(
      Math.floor(Math.random() * 100) 
    );
  }

}
