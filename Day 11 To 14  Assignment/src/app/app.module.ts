import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WebSiteDesignComponent } from './web-site-design/web-site-design.component';
import { WebDevelopementComponent } from './web-developement/web-developement.component';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import { Assg1MonComponent } from './assg1-mon/assg1-mon.component';
import { Ass2monComponent } from './ass2mon/ass2mon.component';
import { Ass3monComponent } from './ass3mon/ass3mon.component';
import { Ass4monComponent } from './ass4mon/ass4mon.component';
import { Ass1TueComponent } from './ass1-tue/ass1-tue.component';
import { Ass2TueComponent } from './ass2-tue/ass2-tue.component';
import { WedAss1Component } from './wed-ass1/wed-ass1.component';
import { WedAss2Component } from './wed-ass2/wed-ass2.component';
import { WedAss3Component } from './wed-ass3/wed-ass3.component';
import { FormsModule } from '@angular/forms';
import { WedAss4Component } from './wed-ass4/wed-ass4.component';
import { WedAss4DetComponent } from './wed-ass4-det/wed-ass4-det.component';
import { ThusAss1Component } from './thus-ass1/thus-ass1.component';
import { ThusAss2Component } from './thus-ass2/thus-ass2.component';
// import { ShowInfoComponent } from './show-info/show-info.component';
// import { ShowinfoComponent } from './showinfo/showinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    WebSiteDesignComponent,
    WebDevelopementComponent,
    MobileappComponent,
    Assg1MonComponent,
    Ass2monComponent,
    Ass3monComponent,
    Ass4monComponent,
    Ass1TueComponent,
    Ass2TueComponent,
    WedAss1Component,
    WedAss2Component,
    WedAss3Component,
    WedAss4Component,
    WedAss4DetComponent,
    ThusAss1Component,
    ThusAss2Component,
    // ShowInfoComponent,
    // ShowinfoComponent
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
