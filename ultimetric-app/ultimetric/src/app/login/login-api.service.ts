import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginApiService {

  constructor(private http: HttpClient) { }

  login(credentials) {
    return this.http.post(
      'http://localhost:3000/api/login',
      credentials
    );
  }
}
