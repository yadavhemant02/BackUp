import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Service/admin.service';
import { DialogComponent } from '../dialog/dialog.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit {

  constructor(private service:AdminService, private dialog:MatDialog, private router:Router) { }
  reso:any
  ngOnInit(): void {
    
    if(sessionStorage.getItem("costomer") == null){
      this.router.navigateByUrl("/costomerlogin")
    }
    this.service.showing().subscribe((data)=>this.reso=data)

  }
 
  bb = sessionStorage.getItem("costomer");
 

  logout(){
    sessionStorage.removeItem("costomer")
    this.router.navigateByUrl("/")
  }

  ddl(){
      
    this.dialog.open(DialogComponent,{width:'400px'})
   
  }

}
