import { Component } from "@angular/core";

@Component({
    selector: 'warningalert-warningalert',
    templateUrl: './warningAlert.component.html',
    styles:[
        `
        warningalert-warningalert .bg-warning h5 {
            font-size: 20px;
            font-weight: bold;
        }
        `
    ]
})
export class WarningAlert {

}