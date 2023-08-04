import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CostomerdataService } from 'src/app/Service/costomerdata.service';

@Component({
  selector: 'app-costomersignup',
  templateUrl: './costomersignup.component.html',
  styleUrls: ['./costomersignup.component.css']
})
export class CostomersignupComponent implements OnInit {
  
  login = new FormGroup({
    email: new FormControl("",[Validators.required]),
    firstname: new FormControl("",[Validators.required]),
    lastname: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required]),
    confirmpassword: new FormControl("",[Validators.required])
  })

  data={
    email:"",
    firstname:"",
    lastname:"",
    password:"",
    confirmpassword:""
  }
  reo:any;
  constructor(private service:CostomerdataService, private router:Router,private snack:MatSnackBar) { 
    
  }

  ngOnInit(): void {
  }

  dosubmit(){

    if(this.data.email != "" && this.data.firstname != "" && this.data.password!=""){
      if(this.data.password == this.data.confirmpassword){

        this.service.adddata(this.data).subscribe(
         Response=>{
           alert("welcome "+this.data.firstname +" !!")
           this.router.navigateByUrl("/showproduct");
           console.warn(this.data.email)
         },
         error=>{
            alert("not good brother !!")
            console.warn(this.data.password)
         }
         
         )
      }
      else{
             this.snack.open("please enter same password","cancel");
      }
    }
    else{
           this.snack.open("please fill all fields","cancel")
    }


  }

}
