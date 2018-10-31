import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor(private loginservice: LoginService) { }
  loginUser(username, password) {
    this.loginservice.loginUser(username,password)
  }
  ngOnInit() {
  }

}
