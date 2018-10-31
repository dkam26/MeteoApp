import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { SignupService } from '../services/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username:string;
  firstname:string;
  secondname:string;
  password:string;
  email:string;
  constructor(private signupservice: SignupService) { }
  addUser(username, firstname, secondname, password, email) {
    console.log(username, firstname, secondname, password, email)
    this.signupservice.addUser(username, firstname, secondname, password, email)
  }
  ngOnInit() {
  }

}
