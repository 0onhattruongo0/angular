import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ListsComponent } from './components/lists/lists.component';
import { EditComponent } from './components/edit/edit.component';
import { CreateComponent } from './components/create/create.component';


const appRoutes: Routes=[
  {path:'', component:ListsComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'create', component:CreateComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListsComponent,
    EditComponent,
    CreateComponent
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
