import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Display5Component } from './display5/display5.component';
import { Display1Component } from './display1/display1.component';
import { EmployeesComponent } from './employees/employees.component';
const routes: Routes = [
  
  {path:'display5',component:Display5Component},
  {path:'display1',component:Display1Component},
  {path:'employees',component:EmployeesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
