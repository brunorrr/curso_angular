import { Component } from "@angular/core";

@Component({
    //Nome/Seletor do Componente, deve ser único em toda a aplicação
    selector: 'app-server',
    //URL do HTML do Componente
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    getServerStatus(){
        return this.serverStatus;
    }
}