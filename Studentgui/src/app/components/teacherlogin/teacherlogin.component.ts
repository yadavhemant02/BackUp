import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { StdataService } from 'src/app/services/stdata.service';

@Component({
  selector: 'app-teacherlogin',
  templateUrl: './teacherlogin.component.html',
  styleUrls: ['./teacherlogin.component.css']
})
export class TeacherloginComponent implements OnInit {
  

  data={
    name:"",
    password:""
  }
  reso:any;
  constructor(private service:StdataService,private router:Router,private snack:MatSnackBar) {
    
   }
  
  ngOnInit(): void {
    this.service.takedata().subscribe((data)=>this.reso=data)
  }
  gg:any;
  Userdata(){

    for(var uu of this.reso){
        if(this.data.name== uu.name && this.data.password== uu.password){
              sessionStorage.setItem("teacher",uu.name)
              this.gg= 1;
              this.router.navigate(['/data'])
        }
    }
    if(this.gg!=1){
      this.snack.open("please fill data correctlly !" , "cancel")
    }

    

  }

}
