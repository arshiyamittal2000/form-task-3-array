import { Component } from "@angular/core";
import { SignupModel } from './signupModel';


@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent {

  genders = ['Male', 'Female'];
  model = {fname: '',
    lname: '',
    gender: ''
  }
  submitted = false;
  confirm = false;

  onSubmit() { this.submitted = true; }

  confirmSubmit() {
    this.confirm = true; 
    this.submitted = false;

    console.log('Its confirmed!');
  }
}
