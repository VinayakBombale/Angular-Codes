import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayformComponent } from './displayform/displayform.component';
import { FormsModule } from '@angular/forms';
import { Display2Component } from './display2/display2.component';
import { Display2childComponent } from './display2child/display2child.component';
import { Display3Component } from './display3/display3.component';
import { Display3childComponent } from './display3child/display3child.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayformComponent,
    Display2Component,
    Display2childComponent,
    Display3Component,
    Display3childComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
