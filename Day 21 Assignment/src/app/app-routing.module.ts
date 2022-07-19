import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayformComponent } from './displayform/displayform.component';
import { Display2Component } from './display2/display2.component';
import { Display3Component } from './display3/display3.component';

const routes: Routes = [
  {path:'displayform',component:DisplayformComponent},
  {path:'display2',component:Display2Component},
  {path:'display3',component:Display3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
