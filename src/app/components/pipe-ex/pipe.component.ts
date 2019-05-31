import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  date:Date = new Date();
  num1:number = 1234.56;
  num2:number = 3.12345678;
  json:Object = {moo:'foo',goo :{too:'poo'}}
  
  constructor() { }

  ngOnInit() {
  }

}
