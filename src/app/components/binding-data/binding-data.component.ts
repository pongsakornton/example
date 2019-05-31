import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-data',
  templateUrl: './binding-data.component.html',
  styleUrls: ['./binding-data.component.css']
})
export class BindingDataComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  skill:string;
  imgUrl:string="./assets/cat.jpg"

  placeholderName:string = "Input Name"

  constructor() { }
  ngOnInit() {
  }
  onReset(){
    this.name = '';
    this.age = null;
    this.email = '';
    this.skill = '';
    this.imgUrl="./assets/cat.jpg"
  }
}
