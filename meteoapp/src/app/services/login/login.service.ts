import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router:Router) {}
  loginUser(username, password){
    console.log(username,password)
    const uri = 'http://localhost:3000/ul/login';
    const obj = {
      username: username,
      password: password,
  };
  this.http.post(uri, obj)
  .subscribe(res => this.router.navigate(['/search']));
  }
}
