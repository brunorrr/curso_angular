import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // The best way to use a service is with Dependency injetion, with this procedure, angular instantiate the attribute
  // We need to tell Angular what is the class that provides us the service, in this case LoggingService
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // We need to pass the service provider as an argument to the constructor
  constructor(private loggingService: LoggingService){ }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    // Now, with the provider instantiated and ready, we can call it
    this.loggingService.logStatusChange(accountStatus);
  }
}
