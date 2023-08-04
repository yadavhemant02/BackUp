import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css']
})
export class ImageuploadComponent implements OnInit {

  constructor( private service:AdminService, private router:Router) { }
  reso:any
  ngOnInit(): void {

    this.service.showing().subscribe((data)=>this.reso=data)
    console.warn(this.reso)
  }
  
  re:any
  delete(id:any){
     
    this.service.deleted(id).subscribe((data)=>this.re=data)

    this.router.navigateByUrl("/imageupload")
  }

}
