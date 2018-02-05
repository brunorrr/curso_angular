import { Component } from "@angular/core";

@Component({
    //Nome/Seletor do Componente, deve ser único em toda a aplicação
    selector: 'app-server',
    //URL do HTML do Componente
    templateUrl: './server.component.html',
    styles: [
        `.online {
            color: White
        }`
    ]
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}