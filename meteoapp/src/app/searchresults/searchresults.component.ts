import { Component, OnInit, Input } from '@angular/core';

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
  constructor() { 
    
  }
  
  ngOnInit() {
   

  }

  ngOnChanges() {       
    this.latitude = this.results['latitude'];
    this.longitude = this.results['longitude'];
    this.icon = this.results['daily']['data'][0]['icon'];
    this.windspeed = this.results['daily']['data'][0]['windSpeed'];
    this.hummidity = this.results['daily']['data'][0]['humidity'];
    this.summary = this.results['daily']['data'][0]['summary'];   
  
  }
  ngOnDestroy() {

  }
}
