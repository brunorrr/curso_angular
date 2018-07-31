import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        // You may wrap all attributes with single quote mark ' to help HTML code to identify this code
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'gender': new FormControl('male'),
        // FormArray allows you to create a list of form items
        'hobbies': new FormArray([])
      })
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    // Adding a new form control to our form array
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('userData.hobbies')).push(
      control
    );
  }

}
