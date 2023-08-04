import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Service/admin.service';



@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  

  

  data={
    image:"",
    price : 0,
    productcode:0,
    brandname:"",
    productname:"",
    description:"",
    
    
  }
  

  constructor(private service:AdminService,private router:Router) { }
 
  ngOnInit(): void {
   
    if(sessionStorage.getItem("name") == null){
        this.router.navigateByUrl("/adminlogin");
    }
    
  }
   
  
  
  select:any

  ssd(event:any){
      
    this.select = event.target.files[0]

  }

  dosubmit(){
    
    
    this.service.adddata(this.data).subscribe(
      Response=>{
        //alert("good brother !!")
        this.router.navigateByUrl("/imageupload");
       // console.warn(this.data.email)
      },
      error=>{
         alert("not good brother !!")
         //console.warn(this.data.password)
      }
      
      )
  }
  
  bb = sessionStorage.getItem("name")
logout(){
  sessionStorage.removeItem("name");

  this.router.navigateByUrl("/")

}

}
