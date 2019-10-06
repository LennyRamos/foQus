import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerInformation = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    phoneNumber: new FormControl(''),
    subscription: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  register(): void {
    console.log('going to register new user ');
    this.checkNoEmptyFields();
    this.checkAccountExist();
    this.checkPasswords();
  }

  /**
   * Make sure that most fields have been filled out
   * Marks the fields that are empty and need to be filled out
   */
  checkNoEmptyFields(): void {

  }
  /**
   * First check to see if account with email exist already.
   */
  checkAccountExist(): void {

  }
  /**
   * Second check the passwords entered match.
   */
  checkPasswords(): void {

  }



}
