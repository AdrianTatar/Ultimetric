import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bugs-chart',
  templateUrl: './bugs-chart.component.html',
  styleUrls: ['./bugs-chart.component.css']
})
export class BugsChartComponent {
  @Input() single: any[];
  multi: any[];

  view: any[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Employee';
  showYAxisLabel = true;
  yAxisLabel = 'Bugs';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    // Object.assign(this, { single });
  }

  onSelect(event) {
    console.log(event);
  }

}
