import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient, private router:Router, public snackBar: MatSnackBar) {}
  addUser(username, firstname, secondname, password, email){
    const uri = 'https://meteoapiexpress.herokuapp.com/ul/signup';
    const obj = {
      username: username,
      firstname: firstname,
      secondname: secondname,
      password: password,
      email: email
  };
  this.http.post(uri, obj)
  .subscribe((res) => {
    this.snackBar.open(res['Message'],'Welcome',{
      duration: 500,
    });
    this.router.navigate(['/login']);
    console.log(res['Message'])},
  (error) =>{
    this.snackBar.open(error.error['Message']);
    console.log(error.error['Message'])
  });

  }
}
