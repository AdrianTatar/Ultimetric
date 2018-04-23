import { Component, OnInit } from '@angular/core';
import { BugsActionsService } from '../bugs-actions.service';
import { Store } from '@ngrx/store';
import * as fromStore from '../../app-store';
import { BugsApiService } from '../bugs-api.service';

@Component({
  selector: 'app-bugs-chart-container',
  templateUrl: './bugs-chart-container.component.html',
  styleUrls: ['./bugs-chart-container.component.css']
})
export class BugsChartContainerComponent {
  population$;
  constructor(private bugsAction: BugsActionsService, private store: Store<fromStore.State>, private bugsAPI: BugsApiService) {
    // this.bugsAction.getPopulation();
    this.bugsAPI.getPopulation().subscribe(
      (result: any) => {
        this.store.dispatch({
          type: BugsActionsService.GET_POPULATION,
          payload: result
        });
      },
      error => error
    );
    this.population$ = store.select(fromStore.getBugsData);
  }

}
