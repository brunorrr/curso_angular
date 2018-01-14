import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  //Usando styles para criar estilos diretamente no Typescript
  styles: [`
    h3{
      color: lightblue;
  }
  `]
})
export class AppComponent {
}
