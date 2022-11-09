import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getCodeEndpoint } from 'src/app/endpoints/endpoints';
import { Socket, SocketIoModule } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient, private socket: Socket) { }

  getCode(codeBlockId: number) {
    return this.http.get(getCodeEndpoint.insert({codeBlockId}));
  }

  connectToSocket(uuid: string) {
    this.socket.connect();
    this.sendSessionCreds(uuid)
  }

  sendSessionCreds(uuid: string) {
    this.socket.emit('sendSessionCreds', uuid);
  }
}
