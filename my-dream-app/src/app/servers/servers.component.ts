import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',
  //Com os colchetes [] colocamos o seletor do app-server como um atributo de algum elemento HTML
  //selector: '[app-servers]',
  //Colocando um . na frente definimos que o componente será identificado como classe
  selector: '.app-servers',
  //Colocando como template apenas, podemos colocar o código HTML dentro do typescript
  //templateUrl: './servers.component.html',
  //Usando ` podemos colocar várias linhas de código para descrever uma linha
  template: `<app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
