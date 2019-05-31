import { Component, OnInit } from '@angular/core';
import { ObservbleService } from 'src/app/service/observble.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

 

  myObserver = {
    next:x => {console.log("next value "+x)},
    error:err => {console.log("error "+err)},
    complate:() => {console.log("complate !!")}
  }

  names:any;
  constructor(private observableService:ObservbleService) { }

  ngOnInit() {

    this.observableService.myObservable.subscribe(this.myObserver)
    let nameObseevable = this.observableService.getName();
      nameObseevable.subscribe(
        data =>{
          console.log(data)
          this.names = data;
        },
        err => {console.log("Error"+ err)},
        () => { console.log("complate !!!")}
      )
    }

}
