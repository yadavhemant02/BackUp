import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { CostomerdataService } from 'src/app/Service/costomerdata.service';



@Component({
  selector: 'app-costomerlogin',
  templateUrl: './costomerlogin.component.html',
  styleUrls: ['./costomerlogin.component.css']
})
export class CostomerloginComponent implements OnInit {
  
  login= new FormGroup ({
    name: new FormControl("",[Validators.required]),
    password : new FormControl("",[Validators.required])
  })
  reso:any;
  constructor(private service:CostomerdataService, private router :Router) {
    this.service.take().subscribe((res)=>{this.reso=res})
   }

  ngOnInit(): void { 
  }

  data={
    email:"",
    password:""
  }
  
   bb=2;
   dosubmit(){
    console.warn(this.reso.email);
    
    

    for(var uu of this.reso){
      if(this.data.email==uu.email && this.data.password== uu.password){
        sessionStorage.setItem("costomer" , uu.firstname)
        this.router.navigateByUrl("/showproduct");
       // alert("welcom " + uu.firstname +"!!")

        this.bb= 1;
      }
    }
    if (this.bb!=1){
      alert("Pleases enter correct details !")
    }
    
   }
   back(){
    this.router.navigateByUrl("/")
   }
}
