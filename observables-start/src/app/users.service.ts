import { Subject } from 'rxjs';

export class UserService {
  // Subject is an observer and an observable
  userActivated = new Subject();
}
