import { NgModule } from '@angular/core';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginContainerComponent } from './containers/login-container/login.container';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { StoreModule } from '@ngrx/store';
import { authenticationFeatureKey, authenticationReducer } from './store/authentication.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthenticationEffects } from './store/authentication.effects';

const components = [
  LoginContainerComponent,
  LoginComponent
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    SharedModule,
    AuthenticationRoutingModule,
    StoreModule.forFeature(authenticationFeatureKey, authenticationReducer),
    EffectsModule.forFeature([AuthenticationEffects])
  ]
})
export class AuthenticationModule { }
