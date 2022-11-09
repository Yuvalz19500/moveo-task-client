import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getCodeEndpoint } from 'src/app/endpoints/endpoints';
import { Socket, SocketIoModule } from 'ngx-socket-io';
import { Store } from '@ngrx/store';
import { codeChange, getCodeSuccess } from '../store/session.actions';
import { State } from '../store/session.reducer';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private onReceiveCodeChange = new Subject<string>();
  onReceiveCodeChange$ = this.onReceiveCodeChange.asObservable();

  sessionUuid: string | null = null;

  constructor(private store: Store, private http: HttpClient, private socket: Socket) { }

  getCode(codeBlockId: number) {
    return this.http.get(getCodeEndpoint.insert({codeBlockId}));
  }

  async connectToSocket(uuid: string) {
    try {
      this.socket.connect();
      this.sendSessionCreds(uuid);
    } catch (e) {
      console.error(e);
    }

    this.registerEvents();
    this.sessionUuid = uuid;
  }

  closeSocket() {
    this.disconnectFromSession();
    this.unregisterEvents();
    this.socket.disconnect();
    this.sessionUuid = null;
  }

  sendSessionCreds(uuid: string) {
    this.socket.emit('sendSessionCreds', uuid);
  }

  disconnectFromSession() {
    this.socket.emit('disconnectFromSession', this.sessionUuid);
  }

  registerEvents() {
    this.socket.fromEvent('receiveCodeChange').subscribe((code: any) => {this.onReceiveCodeChange.next(code);})
  }

  unregisterEvents() {
    this.socket.removeAllListeners();
  }

  sendCodeChange(code: string) {
    if(!!this.sessionUuid) {
      this.socket.emit('sendCodeChange', this.sessionUuid ,code);
    }
  }
}
