import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { StdataService } from 'src/app/services/stdata.service';

@Component({
  selector: 'app-stlogin',
  templateUrl: './stlogin.component.html',
  styleUrls: ['./stlogin.component.css']
})
export class StloginComponent implements OnInit {
  data={
    rollno:"",
    name:""
  }
  
  result:any;
  constructor(private serve:StdataService, private snak:MatSnackBar, private router:Router) { 
    this.serve.showing().subscribe((data)=>{this.result=data})

  }

  ngOnInit(): void {
  }
  ff:any;
  gg:any;
  Userdata(){
     for(var uu of this.result){
        if(this.data.rollno==uu.rollno && this.data.name==uu.name ){
           this.ff = uu
           this.snak.open("good this is "+uu.name+" information !", "cancel")
           this.gg = 1;
           sessionStorage.setItem("name",uu.name)
           this.router.navigate(['/stshow'+"/"+uu.id]);
    }
   
   
    
  }
  if(this.gg!=1){
        this.snak.open("Please Fill your data correctlly !" , "cancel")
  }
  }

  }


