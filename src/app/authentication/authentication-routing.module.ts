import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainerComponent } from './containers/login-container/login.container';

const routes: Routes = [
  {
    path: 'mentor-login',
    component: LoginContainerComponent,
    data: {studentLogin: false}
  },
  {
    path: 'student-login/:uuid/:studentId/:codeBlockId',
    component: LoginContainerComponent,
    data: {studentLogin: true}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
