import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class SavedataService {

  constructor(private http: HttpClient, public snackBar: MatSnackBar) { }
  savedata(data, token){

    const uri = 'https://meteoapiexpress.herokuapp.com/ul/data';
    const obj =  data;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': token,
    })
  };
   return this.http.post(uri, obj,httpOptions).subscribe((res) => {
    this.snackBar.open(res['Message'],'',{
      duration: 500,
    });
     });
  }
}
