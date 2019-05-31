import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-if-switch',
  templateUrl: './ng-for-if-switch.component.html',
  styleUrls: ['./ng-for-if-switch.component.css']
})
export class NgForIfSwitchComponent implements OnInit {

  peoples: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "age": 32,
      "country": 'USA'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
