import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigate-page2',
  templateUrl: './navigate-page2.component.html',
  styleUrls: ['./navigate-page2.component.css']
})
export class NavigatePage2Component implements OnInit {

  textMessage:string;
  constructor(private location:Location,private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams.subscribe(
      param => { 
        this.textMessage = param['text'];
        console.log(this.textMessage);
        
      }
    )
  }

  onBack(){
    this.location.back();
  }

}
