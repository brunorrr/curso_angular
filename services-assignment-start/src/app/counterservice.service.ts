import { EventEmitter } from "@angular/core";

export class CounterService{
    changesCounter: number = 0;

    changeAdded = new EventEmitter<number>();

    addChange(){
        this.changeAdded.emit(++this.changesCounter);
    }
}