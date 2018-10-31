import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  constructor(private http: HttpClient, private router:Router) {}
  locate(location, token){

    const uri = 'https://meteoapiexpress.herokuapp.com/ul/search';
    const obj = {
      location: location,
  };
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': token,
    })
  };
   return this.http.post(uri, obj,httpOptions)
  }
  getWeather(coordinates, time, token) {
    console.log(coordinates)
    const url = 'https://meteoapiexpress.herokuapp.com/ul/getweather';
    const obj = {
      time:time,
      location: coordinates, 
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': token,
      })
    };
    return this.http.post(url, obj,httpOptions)
  }
}
