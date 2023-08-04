import { HttpClient } from '@angular/common/http';
import { DeclarationListEmitMode } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  url = "http://localhost:8899/product"

  constructor(private http:HttpClient) { }

  adddata(data:any){
    return this.http.post(this.url,data)
  }
  show = "http://localhost:8899/productget"
  
  showing(){
    return this.http.get(this.show);
   
    
  }
  singleshow(id:any){
    return this.http.get(this.show+"/"+id)
  }

  image = "http://localhost:8899/product";
 
  addimage(id:any,data:any){

    return this.http.put(this.image+"/"+id,data)

  }

  onserver = "http://localhost:8899/onupload";

  onupload(data:any){
    return this.http.post(this.onserver,data);
  }

  adminlogin = "http://localhost:8899/adminlogin";

  login(){
    return this.http.get(this.adminlogin);
  }

  dialog = "http://localhost:8899/findbyname";
  finddialog(data:any){
    return this.http.get(this.dialog,data);
  }

  delete="http://localhost:8899/delete";
  deleted(id:any){
    return this.http.delete(this.delete+"/"+id)
  }
}
