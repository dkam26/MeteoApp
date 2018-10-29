import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SavedataService {

  constructor(private http: HttpClient) { }
  savedata(data, token){

    const uri = 'http://localhost:3000/ul/data';
    const obj =  data;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': token,
    })
  };
   return this.http.post(uri, obj,httpOptions).subscribe(res => console.log(res));
  }
}
