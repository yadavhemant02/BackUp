import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-addimage',
  templateUrl: './addimage.component.html',
  styleUrls: ['./addimage.component.css']
})
export class AddimageComponent implements OnInit {

  constructor(private service:AdminService, private rout: Router, private router:ActivatedRoute) { }

  ngOnInit(): void {

    console.warn(this.router.snapshot.params['id'])
  }

  select:any;

  ssd(event:any){
    this.select=event.target.files[0];
  }

  dosubmit(){

    const uploadImageData = new FormData();
    uploadImageData.append('file', this.select);
    this.service.addimage(this.router.snapshot.params['id'],uploadImageData).subscribe(

      (Response)=>{
         console.warn("good");
      }
    )

    this.service.onupload(uploadImageData).subscribe(
      (Response)=>{
           console.warn("good")
       },
       (error)=>{
         this.rout.navigateByUrl("/showproduct")
       }

    )

  }


}
