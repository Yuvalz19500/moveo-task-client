import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../../store/authentication.actions';

@Component({
  selector: 'moveo-task-login-container',
  templateUrl: './login.container.html',
})
export class LoginContainerComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onLoginSubmit(loginForm: {
    username: string;
    password: string;
}) {
    this.store.dispatch(login({payload: {username: loginForm.username, password: loginForm.password}}))
  }

}