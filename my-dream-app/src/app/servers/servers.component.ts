import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',
  //Com os colchetes [] colocamos o seletor do app-server como um atributo de algum elemento HTML
  //selector: '[app-servers]',
  //Colocando um . na frente definimos que o componente será identificado como classe
  selector: '.app-servers',
  //Colocando como template apenas, podemos colocar o código HTML dentro do typescript
  templateUrl: './servers.component.html',
  //Usando ` podemos colocar várias linhas de código para descrever uma linha
  // template: `<app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!';
  serverName:string = 'TestServer';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() { 
    setTimeout(() =>{
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push( this.serverName );
  }

  onUpdateServerName(event : any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
