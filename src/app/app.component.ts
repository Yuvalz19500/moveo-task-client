import { Component, HostListener, OnDestroy } from '@angular/core';
import { AuthService } from './authentication/services/auth.service';
import { SessionService } from './session/services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private sessionService: SessionService) {}

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event: any): void {
    this.sessionService.closeSocket();
  }
}
