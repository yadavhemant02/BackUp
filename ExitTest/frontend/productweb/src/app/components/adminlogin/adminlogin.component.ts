import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
 
  data={
    name:"",
    password:""
  }

  constructor( private service:AdminService, private router:Router) { }
  
  reso:any;

  ngOnInit(): void {
    this.service.login().subscribe((data)=>this.reso=data)
    console.warn(this.reso)
  }

  dosubmit(){
  console.warn(this.data.name)
   for(var uu of this.reso){
     
    if(this.data.name==uu.name && this.data.password==uu.password){

      console.warn(uu.name);
      sessionStorage.setItem("name",uu.name)   
      this.router.navigateByUrl("/addproduct")

    }
    else{
      alert("Pleases enter correct details !")
    }


   }

  }

  back(){
    this.router.navigateByUrl("/");
  }

}
