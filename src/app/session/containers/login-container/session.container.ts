import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/authentication/services/auth.service';
import { UserType } from 'src/app/interfaces/user';
import { SessionService } from '../../services/session.service';
import { selectSessionState } from '../../store';
import { codeChange, getCode } from '../../store/session.actions';

@Component({
  selector: 'moveo-task-login-container',
  templateUrl: './session.container.html',
})
export class SessionContainerComponent implements OnInit, OnDestroy {

  isStudent = false;
  codeBlockId: number | null = null;
  uuid: string | null = null;
  codeChangeSubscription: Subscription | null = null;

  sessionState$ = this.store.pipe(select(selectSessionState));

  constructor(private store: Store, private authService: AuthService, private activatedRoute: ActivatedRoute, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.isStudent = this.authService.authUser?.userType === UserType.STUDENT;
    this.codeBlockId = this.activatedRoute.snapshot.params['codeBlockId'];
    this.uuid = this.activatedRoute.snapshot.params['uuid']; 

    if(this.codeBlockId) {
      this.store.dispatch(getCode({payload: {codeBlockId: this.codeBlockId}}))
    }

    if(this.uuid) {
      this.sessionService.connectToSocket(this.uuid);

      if(!this.isStudent) {
        this.codeChangeSubscription = this.sessionService.onReceiveCodeChange$.subscribe((code: string) => {
          this.store.dispatch(codeChange({payload: {code}}));
        });
      } 
    }
  }

  ngOnDestroy(): void {
    this.sessionService.closeSocket();

    this.codeChangeSubscription?.unsubscribe();
    this.codeChangeSubscription = null;
  }

  onCodeChange(code: string) {
    this.sessionService.sendCodeChange(code);
  }

}