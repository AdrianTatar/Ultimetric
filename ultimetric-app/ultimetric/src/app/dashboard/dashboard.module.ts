import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule, dashboardRoutingComponents } from './dashboard-routing.module';
import { ChartsComponent } from './charts/charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DashboardApiService } from './dashboard-api.service';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    DashboardRoutingModule
  ],
  declarations: [ChartsComponent, dashboardRoutingComponents],
  providers: [DashboardApiService]
})
export class DashboardModule { }
