import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.css']
})
export class OutputChildComponent implements OnInit {

  @Output() emitMessage : EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onKey(event){
    console.log(event.target.value)
    this.emitMessage.emit(event.target.value)
  }

}
