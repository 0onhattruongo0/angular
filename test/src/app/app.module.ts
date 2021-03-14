import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { SearchfilterPipe } from "./searchfilter.pipe";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


const appRoutes: Routes=[
  {path:'', component:EmployeeComponent},
  {path:'edit/:id', component:EmployeeEditComponent},
  {path:'add',component:EmployeeAddComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NavbarComponent,
    EmployeeEditComponent,
    EmployeeAddComponent,
    SearchfilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
