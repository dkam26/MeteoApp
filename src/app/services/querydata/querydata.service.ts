import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class QuerydataService {
  results:Object;
  constructor(private http: HttpClient, private router:Router, public snackBar: MatSnackBar) { }
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
  deletedata(token, id){
    const uri = `https://meteoapiexpress.herokuapp.com/ul/deletedata/${id}`;
    const obj ={'id': id}
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': token,
      })
    }
    return this.http.delete(uri,httpOptions).subscribe((res) => {
      this.snackBar.open(res['Message'],'',{
        duration: 500,
      });
    })
  }
  
}
