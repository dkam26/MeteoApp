import { Component, OnInit, OnChanges } from '@angular/core';
import { GetWeatherService } from '../services/search/search.service';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';
import moment from 'moment/src/moment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  date:String;
  location:string;
  coordinates:Object;
  formattedDate:String;
  results:Object;
  constructor(private signupservice: GetWeatherService, private loginservice: LoginService, private router: Router) { }
  locate(date,location) {
    this.date=date
  const momentDate = new Date(date); // Replace event.value with your date value
  this.formattedDate = moment(momentDate).format("YYYY-MM-DDTHH:MM:SS");
   this.signupservice.locate(location, this.loginservice.cookieValue ) 
        .subscribe((res) => {
          this.coordinates={ ...res}
          this.signupservice.getWeather(this.coordinates, this.formattedDate, this.loginservice.cookieValue )
          .subscribe((res) => {
            this.results={"Data":res, "Location":location}
          })
        }
          );
    return this.results;
       
  }
 
  ngOnInit() {
  }

}
