import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { SideNavDomainComponent } from './sidenav-domain/sidenavdomain.component';
import { SideNavEnvironmentComponent } from './sidenav-environment/sidenavenvironment.component';
import { DomainButtonComponent } from './domain-button/domain-button.component';
import { EnvironmentItemComponent } from './environment-item/environment-item.component';
@NgModule({
  declarations: [
    AppComponent,
    BubbleChartComponent,
    SideNavDomainComponent,
    SideNavEnvironmentComponent,
    DomainButtonComponent,
    EnvironmentItemComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
