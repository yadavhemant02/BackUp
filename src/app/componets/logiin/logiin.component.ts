import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-logiin',
  templateUrl: './logiin.component.html',
  styleUrls: ['./logiin.component.css']
})
export class LogiinComponent implements OnInit {

  loginform = new FormGroup({
    name:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })

  get name(){
     return this.loginform.get('name');
  }
  value:any
  constructor() { }

  ngOnInit(): void {
  }

  ddl(){
    console.log(this.loginform.value);
  }

  keydata(data:any){
         return console.warn(data);
  }
}
