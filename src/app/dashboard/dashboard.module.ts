import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { DashboardRoutingModule } from './dashboard-routing.module';

import {Http, HttpModule, Headers, URLSearchParams} from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    DashboardRoutingModule,
    MDBBootstrapModule,
    HttpModule,
    FormsModule,
    CommonModule,
    ChartsModule
  ],
  declarations: [DashboardComponent],
  providers: [DashboardService]
})
export class DashboardModule { }
