/*
    Services are simple classes that provide a method to the other classes in the app
*/
export class LoggingService {
    logStatusChange(status: string){
        console.log('A server status changed, new status: ' + status);
    }
}