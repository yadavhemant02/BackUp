import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddimageComponent } from './components/addimage/addimage.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { CostomerloginComponent } from './components/costomerlogin/costomerlogin.component';
import { CostomersignupComponent } from './components/costomersignup/costomersignup.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { HomeComponent } from './components/home/home.component';
import { ImageuploadComponent } from './components/imageupload/imageupload.component';
import { ShowproductComponent } from './components/showproduct/showproduct.component';
import { SingleproductComponent } from './components/singleproduct/singleproduct.component';

const routes: Routes = [

  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  }
  ,
  {
    path:"costomerlogin",
    component:CostomerloginComponent,
    pathMatch:"full"

  },
  {
    path:"signup",
    component:CostomersignupComponent,
    pathMatch:"full"
  }
  ,
  {
    path:"showproduct",
    component:ShowproductComponent,
    pathMatch:"full"
  }
  ,
  {
    path:"addproduct",
    component:AddproductComponent,
    pathMatch:"full"
  }
  ,
  {
    path:"singleproduct/:id",
    component:SingleproductComponent,
    pathMatch:"full"
  }
  ,
  {
    path:"imageupload",
    component:ImageuploadComponent,
    pathMatch:"full"
  }
  ,
  {
    path:"addimage/:id",
    component:AddimageComponent,
    pathMatch:"full"
  }
  ,
  {
    path:"adminlogin",
    component:AdminloginComponent,
    pathMatch:"full"
  }
  ,
  {
    path:"dialog",
    component:DialogComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
