import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugsComponent } from './bugs.component';
import { RouterModule, Router } from '@angular/router';
import { BugsChartContainerComponent } from './bugs-chart-container/bugs-chart-container.component';

const bugsRoutes = [
  {
    path: '',
    component: BugsComponent,
    children: [
      {path: '', component: BugsChartContainerComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(bugsRoutes)
  ],
  exports: [RouterModule]
})
export class BugsRoutingModule { }
export const bugsRoutingComponents = [BugsComponent, BugsChartContainerComponent];
