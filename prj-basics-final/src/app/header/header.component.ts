import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() tabChanged = new EventEmitter<number>();

  changeTab( index: number ){
    this.tabChanged.emit(index);
  }

}
