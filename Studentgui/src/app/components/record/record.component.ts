import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { StdataService } from 'src/app/services/stdata.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  data={
       id:"",
       rollno:"",
       name:"",
       date:"",
       score:""
  }

  constructor(private adde:StdataService, private snak:MatSnackBar, private router:Router) { }
  reso:any; 
  tt=0;
  ngOnInit(): void {
    this.adde.showing().subscribe((data)=>this.reso=data)
    if(sessionStorage.getItem("teacher")  == null){
      this.router.navigate(['/tchlogin'])
    }
  }

   re:String = "2022-08-22	";
 
 addUser(){
      //this.add.adddata(this.data);
      var rollno = this.data.rollno
      var name= this.data.name
      var date = this.data.date
      var score = this.data.score
      console.warn(this.tt)
     
      for(var uu of this.reso){
        if (rollno==uu.rollno){
          this.tt = 1;
          this.snak.open("this roll no already exist !", "cancel");
         // this.router.navigate(["/"]);
        }
      }
     
      if(rollno=='' || name=="" || date=="" ||score=="" || this.tt ==1){
        if(this.tt == 1){
          this.snak.open(" this roll no already exist !" , "cancel")
        }
        else{
        this.snak.open("Please fill all fill fields !" ,"cancel");
        }
      }
      else{
      console.warn(name);
      
      this.adde.adddata(this.data).subscribe(
         Response=>{
           this.snak.open("Hey welcome your data add seccessfully !" + " " , "cancel");
           console.warn(this.data);
         }
         ,
         error=>{
           this.snak.open("Hey your query is not good !" + " " , "cancel");
         }
         
      )
        }
  }
}


