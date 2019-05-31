import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.css']
})

export class InputChildComponent implements OnInit {

  @Input('message') messageFormParent:string;
  message:string;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log("ngOncahnge")
    if(this.messageFormParent != undefined){
      this.message = "Message is : "+this.messageFormParent;
    }
    
  }

}
