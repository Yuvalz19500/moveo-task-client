import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionContainerComponent } from './containers/login-container/session.container';

const routes: Routes = [
  {
    path: '',
    component: SessionContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule { }
