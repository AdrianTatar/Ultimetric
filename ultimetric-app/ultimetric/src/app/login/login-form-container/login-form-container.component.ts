import { Component, OnInit } from '@angular/core';
import { LoginActionsService } from '../login-actions.service';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../app-store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login-form-container',
  templateUrl: './login-form-container.component.html',
  styleUrls: ['./login-form-container.component.css']
})
export class LoginFormContainerComponent implements OnInit {
  private loginUser$: Observable<any>;
  constructor(
    private loginAction: LoginActionsService,
    private store: Store<fromStore.State>
  ) {
    this.loginUser$ = store.select(fromStore.getLoginFlag);
  }

  ngOnInit() {
  }

  handleLogin(credentials) {
    this.loginAction.userLogin(credentials);
  }
}
