import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-style',
  templateUrl: './ng-class-style.component.html',
  styleUrls: ['./ng-class-style.component.css']
})
export class NgClassStyleComponent implements OnInit {

  inputClass:string=""
  allMyClass ={} ;
  bgColor = {};
  cilckCount:number= 0;

  myStyle ={} 

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "country": 'USA'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

  setAllMyCalss(){

    if(this.cilckCount == 3){
      this.cilckCount =0;
    }
    this.cilckCount++;
    this.allMyClass = {
      "btn-success":this.cilckCount==1,
      "btn-danger":this.cilckCount==2,
      "btn-info":this.cilckCount==3
    }

    this.bgColor = {
      "bg-primary" : this.cilckCount==1,
      "bg-secondary" : this.cilckCount==2,
      "bg-danger": this.cilckCount==3
    }

    this.myStyle = {
      "red" : this.cilckCount==1,
      "blue" : this.cilckCount==2,
      "green": this.cilckCount==3
    }


    console.log(this.bgColor);
    console.log(this.allMyClass);
  }


}
