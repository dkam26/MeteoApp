import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient, private router:Router) {}
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
  .subscribe(res => this.router.navigate(['/login']));
  }
}
