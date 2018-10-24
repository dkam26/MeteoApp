import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  date:string;
  location:string;
  constructor() { }
  locate(date,location) {
    console.log(date,location)
  }
  ngOnInit() {
  }

}
