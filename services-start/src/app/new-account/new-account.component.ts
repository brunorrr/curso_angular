import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // The best way to use a service is with Dependency injetion, with this procedure, angular instantiate the attribute
  // We need to tell Angular what is the class that provides us the service, in this case LoggingService
  // providers: [LoggingService]
})
export class NewAccountComponent {

  // We need to pass the service provider as an argument to the constructor
  constructor(private loggingService: LoggingService,
      private accountService: AccountsService){ 
    // NewAccountComponent now is a listeners of the statusUpdated event of account service
    // and a method(annon method, in this case) is called everytime that this event is triggered
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New status' + status)
    )
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount( accountName, accountStatus);
    // Now, with the provider instantiated and ready, we can call it
    // this.loggingService.logStatusChange(accountStatus);
  }
}
