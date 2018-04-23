import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule
  ]
})
export class SharedMaterialModule { }
