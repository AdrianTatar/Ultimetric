import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bugsRoutingComponents, BugsRoutingModule } from './bugs-routing.module';
import { BugsChartContainerComponent } from './bugs-chart-container/bugs-chart-container.component';
import { BugsChartComponent } from './bugs-chart/bugs-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BugsActionsService } from './bugs-actions.service';
import { BugsApiService } from './bugs-api.service';

@NgModule({
  imports: [
    CommonModule,
    BugsRoutingModule,
    NgxChartsModule
  ],
  declarations: [bugsRoutingComponents, BugsChartComponent],
  providers: [BugsActionsService, BugsApiService]
})
export class BugsModule { }
