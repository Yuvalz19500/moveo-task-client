import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { SessionComponent } from './components/session/session.component';
import { SessionContainerComponent } from './containers/login-container/session.container';
import { SharedModule } from '../shared/shared.module';

const components = [
  SessionComponent,
  SessionContainerComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    SessionRoutingModule,
    SharedModule
  ]
})
export class SessionModule { }
