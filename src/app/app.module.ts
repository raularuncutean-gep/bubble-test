import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { SidenavComponent } from './sidenav/sidenav.component';
@NgModule({
  declarations: [AppComponent, BubbleChartComponent, SidenavComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
