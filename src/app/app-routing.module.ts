import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { SignupComponent } from './componets/signup/signup.component';
import { LogiinComponent } from './componets/logiin/logiin.component';
import { ProfileComponent } from './componets/profile/profile.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"signup",
    component:SignupComponent,
    pathMatch:"full"
  },
  {
    path:"login",
    component:LogiinComponent,
    pathMatch:"full"
  },
  {
    path:"profile",
    component:ProfileComponent,
    pathMatch:"full"
  },
  {
    path:"profile/:id",
    component:ProfileComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
