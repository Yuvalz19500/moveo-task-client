import { NgModule } from '@angular/core';
import { SessionRoutingModule } from './session-routing.module';
import { SessionComponent } from './components/session/session.component';
import { SessionContainerComponent } from './containers/login-container/session.container';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { sessionFeatureKey, sessionReducer } from './store/session.reducer';
import { SessionEffects } from './store/session.effects';
import { EffectsModule } from '@ngrx/effects';

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
    SharedModule,
    StoreModule.forFeature(sessionFeatureKey, sessionReducer),
    EffectsModule.forFeature([SessionEffects])
  ]
})
export class SessionModule { }
