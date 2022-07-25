import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Display1Component } from './display1/display1.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatComponentComponent } from './mat-component/mat-component.component';
import {MatButtonModule} from '@angular/material/button';
import { Display2Component } from './display2/display2.component';


const routes: Routes = [
  {path:'display1',component:Display1Component},
  {path:'matComponent',component:MatComponentComponent},
  {path:'display2',component:Display2Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
