import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

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
  // newServerName = '';
  // newServerContent = '';
  // Creating an attribute to CockpitComponent witch is a reference to HTML element with Angular ID 'serverContentInput'
  // Unlike Local reference used on serverName, in this case, using ViewChild the variable created is a HTML Reference
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  ngOnInit() {
  }

  onAddServer( nameInput: HTMLInputElement /* type optional */ ) {
    //Calling event serverCreated
    this.serverCreated.emit({serverName: nameInput.value, 
        serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint( nameInput ) {
    this.bluePrintCreated.emit({serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value});
  }

}
