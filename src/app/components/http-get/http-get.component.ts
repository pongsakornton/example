import { Component, OnInit } from '@angular/core';
import { HttpGetService } from 'src/app/service/http-get.service';

@Component({
  selector: 'app-http-get',
  templateUrl: './http-get.component.html',
  styleUrls: ['./http-get.component.css']
})
export class HttpGetComponent implements OnInit {

  bc:any;
  currency:string="GBP";
  constructor(private httpGet:HttpGetService) { }

  ngOnInit() {
    this.getBitcoin();
  }
  getBitcoin(){
    this.httpGet.getBitcoin(this.currency).subscribe(
      data=>{
        this.bc = data;
        console.log(this.bc)
      },
      err => {console.log("error: "+ err)},
      () => {console.log("Complate !!")}
    )
  }

}
