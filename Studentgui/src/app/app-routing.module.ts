import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatashowComponent } from './components/datashow/datashow.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RecordComponent } from './components/record/record.component';
import { StloginComponent } from './components/stlogin/stlogin.component';
import { StshowComponent } from './components/stshow/stshow.component';
import { TeacherloginComponent } from './components/teacherlogin/teacherlogin.component';
import { UpdateComponent } from './components/update/update.component';




const routes: Routes = [
 {
  path:"",
  component:HomeComponent,
  pathMatch:"full"
 }
 ,
 {
  path:"data",
  component:DatashowComponent,
  pathMatch:"full"
 }
 ,
 {
  path:"recored",
  component:RecordComponent,
  pathMatch:"full"
 }
 ,
 {
  path:"update/:id",
  component:UpdateComponent,
  pathMatch:"full"
 }
 ,
 {
  path:"stlogin",
  component:StloginComponent,
  pathMatch:"full"
 }
 ,
{
  path:"stshow/:id",
  component:StshowComponent,
  pathMatch:"full"
}
,
{
  path:"data/:id",
  component:DatashowComponent,
  pathMatch:"full"
}
,
{
  path:"logout",
  component:LogoutComponent,
  pathMatch:"full"
}
,
{
  path:"tchlogin",
  component:TeacherloginComponent,
  pathMatch:"full"
}


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
