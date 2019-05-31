import { Injectable } from '@angular/core';
import { of, Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservbleService {

  myObservable = of(1,2,3,4);
  nameList = ['ton','tom','too','tu','ta'] 
  constructor() {

   }

   getName():Observable<any>{
     let nameObservable = new Observable(observer =>{
       setTimeout(() => {
         observer.next(this.nameList);
       }, 10000);
     })
     return nameObservable;
   }
}
