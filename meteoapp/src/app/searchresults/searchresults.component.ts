import { Component, OnInit, Input } from '@angular/core';
import { SavedataService} from '../services/savedata/savedata.service';
import { LoginService } from '../services/login/login.service';
@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {
  @Input() results:Object ;
  latitude:Object;
  longitude:Object;
  icon:Object;
  windspeed:Object;
  hummidity:Object;
  summary:Object;
  time: Object;
  location: Object;
  data: Object;
  constructor(private savedataservice: SavedataService, private loginservice: LoginService) { 
    
  }
  
  ngOnInit() {
   

  }
 savedata(summary, windspeed, humidity, Date, location){
   this.data ={"weatherConditions":summary,
   "windSpeed":windspeed,
   "humidity":humidity,
   "Date":Date,
   "location":location
 }
  this.savedataservice.savedata(this.data, this.loginservice.cookieValue);
 }
  ngOnChanges() {   
    this.location = this.results["Location"];
    this.time = this.results["Data"]['daily']['data'][0]['time'];
    this.latitude = this.results["Data"]['latitude'];
    this.longitude = this.results["Data"]['longitude'];
    this.icon = this.results["Data"]['daily']['data'][0]['icon'];
    this.windspeed = this.results["Data"]['daily']['data'][0]['windSpeed'];
    this.hummidity = this.results["Data"]['daily']['data'][0]['humidity'];
    this.summary = this.results["Data"]['daily']['data'][0]['summary']; 
      
  }
  ngOnDestroy() {

  }
}
