import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Display5Component } from './display5/display5.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Display1Component } from './display1/display1.component';
import { Display1ChildComponent } from './display1child/display1child.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';

@NgModule({
  declarations: [
    AppComponent,
    Display5Component,
    Display1Component,
    Display1ChildComponent,
    EmployeesComponent,
    EmpDetailsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
