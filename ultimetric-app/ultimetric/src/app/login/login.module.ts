import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule, loginRoutingComponents } from './login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { SharedMaterialModule } from '../shared/material/shared-material.module';
import { LoginActionsService } from './login-actions.service';
import { LoginApiService } from './login-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    loginRoutingComponents,
    LoginFormComponent
  ],
  providers: [
    LoginActionsService,
    LoginApiService
  ]
})
export class LoginModule { }
