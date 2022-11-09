import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '../../services/auth.service';
import { login } from '../../store/authentication.actions';

@Component({
  selector: 'moveo-task-login-container',
  templateUrl: './login.container.html',
})
export class LoginContainerComponent implements OnInit {

  constructor(private store: Store, private activatedRoute: ActivatedRoute, private authService: AuthService) { }

  studentLogin = false;
  studentId: number | null = null;
  uuid: string | null = null;
  codeBlockId: number | null = null;

  ngOnInit(): void {
    this.authService.clearAuthStorage();

    this.studentLogin = this.activatedRoute.snapshot.data['studentLogin'];
    this.studentId = this.activatedRoute.snapshot.params['studentId'];
    this.uuid = this.activatedRoute.snapshot.params['uuid'];
    this.codeBlockId = this.activatedRoute.snapshot.params['codeBlockId']; 
  }

  onLoginSubmit(eventData: {
    username: string;
    password: string;
    studentLogin: boolean
}) {
      this.store.dispatch(login({payload: {username: eventData.username, password: eventData.password, studentId: this.studentId, uuid: this.uuid, codeBlockId: this.codeBlockId}}));
  }

}