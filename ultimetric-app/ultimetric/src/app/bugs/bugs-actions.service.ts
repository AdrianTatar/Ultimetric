import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BugsApiService } from './bugs-api.service';
import { Router } from '@angular/router';

@Injectable()
export class BugsActionsService {
  static GET_POPULATION = 'GET_POPULATION';

  constructor(
    private store: Store<any>,
    private bugsAPIService: BugsApiService,
    private router: Router
  ) { }

  getPopulation() {
    this.bugsAPIService.getPopulation().subscribe(
      (result: any) => {
        this.store.dispatch({
          type: BugsActionsService.GET_POPULATION,
          payload: result
        });
      },
      error => error
    );
  }

}
