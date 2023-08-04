import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  
  data={
    productname:"",
    brandname:"",
    productcode:0
  }

  constructor(private router:Router,private service:AdminService,private serve:ActivatedRoute,private snack:MatSnackBar) { }
  reso:any;
  ngOnInit(): void {
     this.service.showing().subscribe((data)=>this.reso=data)
  }

  dosubmit(){
    //const uploadImageData = new FormData();
   // uploadImageData.append('productcode', this.data.productcode);
    //this.service.finddialog(uploadImageData).subscribe((data)=>this.reso=data)

    for (var uu of this.reso){
      if (this.data.productcode==uu.productcode && this.data.productname==uu.productname){
        this.router.navigateByUrl("/singleproduct"+"/"+uu.id)
        this.snack.open("welcome" , "cancel");
        break;
      }
      else{
        this.snack.open("pleases enetr right details !","cancel")
      }
    }
  }

}
