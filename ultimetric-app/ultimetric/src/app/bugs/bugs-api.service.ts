import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BugsApiService {

  constructor(private http: HttpClient) { }

  getPopulation() {
    return this.http.get('http://localhost:3000/api/population');
  }
}
