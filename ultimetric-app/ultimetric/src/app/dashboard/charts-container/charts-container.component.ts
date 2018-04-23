import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from '../dashboard-api.service';

@Component({
  selector: 'app-charts-container',
  templateUrl: './charts-container.component.html',
  styleUrls: ['./charts-container.component.css']
})
export class ChartsContainerComponent implements OnInit {
  private population = [];
  constructor(private dashboardAPIService: DashboardApiService) {
    this.dashboardAPIService.getPopulation().subscribe(
      (pupulation: any) => { this.population = pupulation; }
    );
  }

  ngOnInit() {
  }

}
