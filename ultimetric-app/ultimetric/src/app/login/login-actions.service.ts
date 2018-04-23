import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginApiService } from './login-api.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginActionsService {
  static USER_LOGIN = 'USER_LOGIN';

  constructor(
    private store: Store<any>,
    private loginAPIService: LoginApiService,
    private router: Router
  ) { }

  userLogin(credentials) {
    this.loginAPIService.login(credentials).subscribe(
      (result: any) => {
        this.store.dispatch({
          type: LoginActionsService.USER_LOGIN,
          payload: result
        });
        if (result.isLogged) {
          this.router.navigate(['/dashboard']);
        }
      },
      error => error
    );
  }

}
