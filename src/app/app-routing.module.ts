import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lobby',
    loadChildren: () => import('./lobby/lobby.module').then((m) => m.LobbyModule)
  },
  {
    path: 'mentor-login',
    loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule)
  },
  { path: '**', redirectTo: '/lobby' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
