import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrls: ['./output-parent.component.css']
})
export class OutputParentComponent implements OnInit {

  message:string;
  constructor() { }

  ngOnInit() {
  }

  onOutput(event){
    console.log("onOutput")
    console.log(event)
    this.message = "Message is : "+event;
  }

}
