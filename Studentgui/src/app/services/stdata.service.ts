import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StdataService {

  url = "http://localhost:3000/student"

  show = "http://localhost:3000/student"

  te= "http://localhost:3000/teacher"

  tt="http://localhost:9088/teke"
  
  constructor(private http:HttpClient) { }

  adddata(data:any){
      // console.warn(data);
        return this.http.post(this.url,data);
        
  }

  showing(){
     return this.http.get(this.show);
  }

  getcurrentdata(id:any){
      return this.http.get(this.show+"/"+id);
  }

 // private base = "${this.show}/${id}"

  uptodate(id:any,data:any){
    return this.http.put(this.show+"/"+id,data);

  }

  delete(id:any){
    return this.http.delete(this.show+"/"+id)
  }

  takedata(){
    return this.http.get(this.te);
  }

   
  database(){
    return this.http.get(this.tt);
  }

}
