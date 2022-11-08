import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyContainerComponent } from './containers/lobby-container/lobby.container';

const routes: Routes = [
  {
    path: '',
    component: LobbyContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LobbyRoutingModule { }
