import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginFormContainerComponent } from './login-form-container/login-form-container.component';

const loginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {path: '', component: LoginFormContainerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
export const loginRoutingComponents = [LoginComponent, LoginFormContainerComponent];
