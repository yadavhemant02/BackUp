import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StdataService } from 'src/app/services/stdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private snack:MatSnackBar, private service: StdataService) { }
  reso:any;
  
  ngOnInit(): void {
   // this.reso= "hamejh"     
    this.service.database().subscribe((data)=>this.reso=data)
  }

  dosubmite(){
      this.snack.open("Hey welcome ! Teacher " , "cancel")
  }

 

}
