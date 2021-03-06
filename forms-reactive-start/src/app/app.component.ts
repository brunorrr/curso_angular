import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        // You may wrap all attributes with single quote mark ' to help HTML code to identify this code
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
        'gender': new FormControl('male'),
        // FormArray allows you to create a list of form items
        'hobbies': new FormArray([])
      })
    });
    // this.signupForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    // this.signupForm.statusChanges.subscribe((value) => {
    //   console.log(value);
    // });

    /*
      this.signupForm.patchValue
      patchValue can be used to set the value of a determined form control
      this.signupForm.setValue
      patchValue can be used to set the value of the whole form
    */
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


  forbiddenNames( control: FormControl ): {[s: string]: boolean} {
    if ( this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  /**
    Using a async method as custom validator
    It returns a Promise to Angular with a check if email is equals to test@test.com
  */
  forbiddenEmails( control: FormControl ): Promise<any> | Observable<any> {
    return new Promise<any>(( resolveMethod, reject) => {
      setTimeout(() => {
        if ( control.value === 'test@test.com') {
          resolveMethod({'emailIsForbidden': true});
        } else {
          resolveMethod(null);
        }
      }, 1500);
    });
  }

}
