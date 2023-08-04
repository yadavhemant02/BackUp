import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {

  constructor(private servuce:AdminService,private router:ActivatedRoute) { }
  
  reso:any;
  
  ngOnInit(): void {

    this.servuce.singleshow(this.router.snapshot.params["id"]).subscribe((data)=>this.reso=data)
  }

}
