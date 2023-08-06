import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StdataService } from 'src/app/services/stdata.service';

@Component({
  selector: 'app-stshow',
  templateUrl: './stshow.component.html',
  styleUrls: ['./stshow.component.css']
})
export class StshowComponent implements OnInit {

reso:any;

  constructor(private sho:ActivatedRoute, private tt:StdataService,private router:Router) {
    console.warn(this.sho.snapshot.params['id'])
    this.tt.getcurrentdata(this.sho.snapshot.params['id']).subscribe((data)=>this.reso=data)
   }

  ngOnInit(): void {
    if (sessionStorage.getItem("name")==null){
      this.router.navigate(['/stlogin'])
    }
  }
  rr:any;
  bb = sessionStorage.getItem("name")
  getdata(){
    //console.warn(sessionStorage.getItem("name"))
   // this.rr =sessionStorage.getItem("name")
        sessionStorage.removeItem("name")
        this.router.navigate(["/"])
   }
   
  }


