import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  QuerydataService  } from '../services/querydata/querydata.service';
import { LoginService } from '../services/login/login.service';
@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {
  results:Object;
  constructor(private router:Router, private querydataservice : QuerydataService ,private loginservice: LoginService) { }
  
  ngOnInit() {
    this.querydataservice.querydata(this.loginservice.cookieValue).subscribe((res) =>{
       this.results = res;

    })

  }
  deleteData(results){
    this.querydataservice.deletedata(this.loginservice.cookieValue, results._id)
 
  }

}
