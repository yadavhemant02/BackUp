import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { DatashowComponent } from './components/datashow/datashow.component';
import {MatTableModule} from '@angular/material/table';
import { RecordComponent } from './components/record/record.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { StdataService } from './services/stdata.service';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './components/update/update.component';
import { StloginComponent } from './components/stlogin/stlogin.component';
import { StshowComponent } from './components/stshow/stshow.component';
import { LogoutComponent } from './components/logout/logout.component';
import { TeacherloginComponent } from './components/teacherlogin/teacherlogin.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DatashowComponent,
    RecordComponent,
    UpdateComponent,
    StloginComponent,
    StshowComponent,
    LogoutComponent,
    TeacherloginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    HttpClientModule,
    MatIconModule,
    FormsModule
    
    

   
    
  ],
  providers: [MatSnackBar,StdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
