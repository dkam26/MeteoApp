import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class QuerydataService {
  results:Object;
  constructor(private http: HttpClient, private router:Router) { }
  querydata( token){

    const uri = 'https://meteoapiexpress.herokuapp.com/ul/querydata';
    
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': token,
    })
  };
  return this.http.get(uri, httpOptions)
   
  }
  
}
