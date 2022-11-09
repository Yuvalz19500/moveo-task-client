import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { MentorGuard } from './guards/mentor.guard';
import { StudentAuthGuard } from './guards/student-auth.guard';

const routes: Routes = [
  {
    path: 'lobby',
    loadChildren: () => import('./lobby/lobby.module').then((m) => m.LobbyModule),
    canActivate: [AuthGuard, MentorGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule)
  },
  {
    path: 'session/:uuid/:studentId/:codeBlockId',
    loadChildren: () => import('./session/session.module').then((m) => m.SessionModule),
    canActivate: [StudentAuthGuard]
  },
  { path: '**', redirectTo: '/auth/mentor-login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
