import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from '../../node_modules/rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  signupForm: FormGroup;
  status = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl(null, Validators.required, this.forbiddenName.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Stable')
    });
  }

  forbiddenName( control: FormControl ): Promise<any> | Observable<any> {
    return new Promise<any>((resolveMethod, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolveMethod({ 'forbiddenName': true });
        } else {
          resolveMethod(null);
        }
      }, 1500);
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
