import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwteService } from 'src/app/servises/jwte.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  data={
    username:"",
    name:"",
    email:"",
    password:""
  }

  constructor(private jwtService:JwteService , private rout:Router) { }
   havedata:any=""
  ngOnInit(): void {
    //this.jwtService.getdata().subscribe((data)=>{
      //console.log(data);
      //data=this.havedata}
      //)

   

      
   
  }
  ddt:any
  dosubmit(){
    this.jwtService.sanddata(this.data).subscribe(
      (data)=>{
        //this.snak.open("Hey welcome your data add seccessfully !" + " " , "cancel");
        console.log(data)
        
       
        this.ddt = data
        localStorage.setItem("token",this.ddt.token);
        console.warn(this.ddt.token);
      
        this.rout.navigateByUrl('profile')
       // console.warn(this.data);
      }
      ,
      error=>{
        alert("notgood")
       // this.snak.open("Hey your query is not good !" + " " , "cancel");
      }
    )
  }

}
