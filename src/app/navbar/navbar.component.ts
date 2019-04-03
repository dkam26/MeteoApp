import { Component, OnInit } from '@angular/core';
import {  QuerydataService  } from '../services/querydata/querydata.service';
import { LoginService } from '../services/login/login.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private querydataservice : QuerydataService ,  private loginservice: LoginService) { }
  queryData() {
    this.querydataservice.querydata(this.loginservice.cookieValue)
  }
  ngOnInit() {
  }
   logout(){
     this.loginservice.logout();
   }
}
