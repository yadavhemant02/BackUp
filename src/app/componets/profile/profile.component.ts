import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { JwteService } from 'src/app/servises/jwte.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  ss:any;
  
  havedata:any=''
  constructor(private jwtservice:JwteService ,private routt:Router  ,private route:ActivatedRoute) {
    this.ss = this.route.snapshot.paramMap.get('id');
    console.log(this.ss); 
    this.jwtservice.getdata().subscribe((data)=>this.havedata=data)
  }


  ngOnInit(): void {
    
    //console.warn(this.havedata)
  }

  getdata(data:any){
    console.warn(data);
  }
  ddl(data:any){
       console.warn(data);
  }

  removetoken(){
    localStorage.removeItem("token");
    this.routt.navigateByUrl('');
  }

}
