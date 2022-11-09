import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'moveo-task-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() studentLogin = false;

  @Output() loginSubmit = new EventEmitter<{username: string, password: string, studentLogin: boolean}>();

  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  onLoginAttempt() {
    if (this.loginForm.valid) {
      this.loginSubmit.emit({...this.loginForm.value, studentLogin: this.studentLogin});
    }
  }
}
