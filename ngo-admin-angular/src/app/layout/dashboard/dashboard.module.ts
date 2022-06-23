import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DASHBOARD_ROUTE } from './dashboard-routing.module';




@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DASHBOARD_ROUTE
  ]
})
export class DashboardModule { }
