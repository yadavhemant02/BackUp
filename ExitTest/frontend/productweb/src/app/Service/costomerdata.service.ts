import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CostomerdataService {
  
  url = "http://localhost:8899/take";

  show="http://localhost:8899/get"

  constructor(private http:HttpClient) { }

  adddata(data:any){
    return this.http.post(this.url,data);
  }

  take(){
    return this.http.get(this.show);
  }

}
