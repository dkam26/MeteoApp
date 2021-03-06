import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {MatSnackBar} from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  cookieValue = 'Unknown';
  constructor(private http: HttpClient, private router:Router,
             private cookieService: CookieService,public snackBar: MatSnackBar) {}
  loginUser(username, password){
    const uri = 'https://meteoapiexpress.herokuapp.com/ul/login';
    const obj = {
      username: username,
      password: password,
  };
  this.http.post(uri, obj)
  .subscribe((res) => {
    
    this.cookieService.set( 'Test', res['token'] )
    this.cookieValue = this.cookieService.get('Test');
    this.router.navigate(['/search'])
  },
  (error)=>{
    this.snackBar.open(error.error['Message']);
  }
  );
  }
  logout(){
    this.cookieService.delete('Test');
    this.router.navigate(['/login']);
  }
}
