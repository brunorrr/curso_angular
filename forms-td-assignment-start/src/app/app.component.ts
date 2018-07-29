import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  defaultSubscription = 'advanced';
  user = {
    email: '',
    subscription: '',
    password: ''
  };
  submitted = false;

  @ViewChild('f') signupForm: NgForm;

  onSubmit() {
    this.user.email = this.signupForm.value.email;
    this.user.subscription = this.signupForm.value.subscription;
    this.user.password = this.signupForm.value.password;

    this.submitted = true;

    // Reset everything in the form
    this.signupForm.reset();
  }

}
