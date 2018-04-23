import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Output() loginEvent = new EventEmitter();
  @Input() user;

  loginUser: FormControl;
  loginPass: FormControl;

  constructor() {
    this.loginUser = new FormControl(
      'admin@ad.com',
      [Validators.required, Validators.email]
    );
    this.loginPass = new FormControl(
      'admin',
      [Validators.required]
    );
  }

  ngOnInit() {
  }

  login() {
    this.loginEvent.emit({
      user: this.loginUser.value,
      pass: this.loginPass.value
    });
  }

}
