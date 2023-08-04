import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { StdataService } from 'src/app/services/stdata.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  
  
  result:any;
  constructor(private router:ActivatedRoute, private getcurr:StdataService, private snak:MatSnackBar) { 
    console.warn(this.router.snapshot.params['id'])
    console.warn("hdhdh");
   // this.data.name= "hemant"
    
   getcurr.showing().subscribe((data)=>{
    this.result=data
   // this.data.name= "hemant"
   
   })
    }
  ff:any;

  ngOnInit(): void {
    
 
   this.getcurr.getcurrentdata(this.router.snapshot.params["id"]).subscribe((reso)=>{
    this.ff=reso
    })  
  }
   
  addUser(){
    console.warn(this.result);
    this.getcurr.uptodate(this.router.snapshot.params['id'],this.ff).subscribe(
      Response=>{
        this.snak.open("Hey welcome your data add seccessfully !" + " " , "cancel");
        //console.warn(this.data);
      }
      ,
      error=>{
        this.snak.open("Hey your query is not good !" + " " , "cancel");
      }
    )

  }
}
