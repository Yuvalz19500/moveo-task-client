import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LobbyRoutingModule } from './lobby-routing.module';
import { LobbyContainerComponent } from './containers/lobby-container/lobby.container';
import { LobbyComponent } from './components/lobby/lobby.component';
import { LobbyCodeBlockItemComponent } from './components/lobby-code-block-item/lobby-code-block-item.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { lobbyFeatureKey, lobbyReducer } from './store/lobby.reducer';
import { LobbyEffects } from './store/lobby.effects';
import { EffectsModule } from '@ngrx/effects';

const components = [
  LobbyContainerComponent
]

@NgModule({
  declarations: [
    ...components,
    LobbyComponent,
    LobbyCodeBlockItemComponent
  ],
  imports: [
    LobbyRoutingModule,
    SharedModule,
    StoreModule.forFeature(lobbyFeatureKey, lobbyReducer),
    EffectsModule.forFeature([LobbyEffects])
  ]
})
export class LobbyModule { }
