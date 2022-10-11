import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { SideNavDomainComponent } from './sidenav-domain/sidenavdomain.component';
import { SideNavEmvironmentComponent } from './sidenav-emvironment/sidenavemvironment.component';
@NgModule({
  declarations: [
    AppComponent,
    BubbleChartComponent,
    SideNavDomainComponent,
    SideNavEmvironmentComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
