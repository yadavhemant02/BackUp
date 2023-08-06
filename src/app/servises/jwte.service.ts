import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwteService {

  url = "http://localhost:8889/login"

  urll= "http://localhost:8889/wel"

  dataurl="http://localhost:8889/data"
  constructor(private http :HttpClient) {

   }

  public sanddata(data:any){
     console.warn(data);
     return this.http.post(this.url,data);
  } 

  Token:any;
  public getdata(){
    this.Token = localStorage.getItem("token");
    console.warn(this.Token);
    const headers = new HttpHeaders().set("authorization" , this.Token);

    console.warn(headers);

    return this.http.get(this.urll,{headers});

  }
  public dataapi(){
    return this.http.get(this.dataurl)
  }
}
