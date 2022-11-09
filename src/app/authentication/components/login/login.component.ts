import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'moveo-task-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() studentLogin = false;

  @Output() loginSubmit = new EventEmitter<{username: string, password: string, studentLogin: boolean}>();

  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log('Yuval debug -', this.studentLogin);
  }

  onLoginAttempt() {
    if (this.loginForm.valid) {
      this.loginSubmit.emit({...this.loginForm.value, studentLogin: this.studentLogin});
    }
  }
}
