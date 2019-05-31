import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpGetService {

  ROOT_URL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC"
  constructor(private http:HttpClient) { 

  }

  getBitcoin(type):Observable<any>{
    return this.http.get(this.ROOT_URL+type)
  }
}
