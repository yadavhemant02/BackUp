import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StdataService } from 'src/app/services/stdata.service';

@Component({
  selector: 'app-datashow',
  templateUrl: './datashow.component.html',
  styleUrls: ['./datashow.component.css']
})
export class DatashowComponent implements OnInit {

  showin:any; 

  constructor(private show:StdataService, private tt:MatSnackBar , private router:Router) { 
    show.showing().subscribe((data)=>{this.showin=data});
   // console.warn( Object.keys(this.showin).length);
   console.warn(this.showin)

  }

  ngOnInit(): void {
    if(sessionStorage.getItem("teacher") == null){
      this.router.navigate(["/tchlogin"])
    }
  }

  sub(){
    console.warn(this.showin.name);
    console.warn("hhh");
  }
  collection:any=[];
  reso:any;
  deleted(id:any){
   console.warn(id);
   this.collection.splice(id-1,1)
   if(this.show.delete(id).subscribe((data)=>this.reso=data)){
    this.tt.open(" your data is deleted !", "cancel")
   }

   

  }
  getdata(){
    return sessionStorage.getItem("teacher")
  }
  removedata(){
    sessionStorage.removeItem("teacher")
    this.router.navigate(['/'])
  } 
}
