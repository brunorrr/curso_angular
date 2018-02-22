import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  
  //Exporting serverCreated as an event
  @Output() serverCreated = new EventEmitter< {serverName: string, serverContent: string}>();
  //Aliasing bluePrintCreated with 'bpCreated'
  @Output('bpCreated') bluePrintCreated = new EventEmitter< {serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  ngOnInit() {
  }

  onAddServer( nameInput: HTMLInputElement /* type optional */ ) {
    //Calling event serverCreated
    this.serverCreated.emit({serverName: nameInput.value, 
        serverContent: this.newServerContent});
  }

  onAddBlueprint( nameInput ) {
    this.bluePrintCreated.emit({serverName: nameInput.value, 
      serverContent: this.newServerContent});
  }

}
