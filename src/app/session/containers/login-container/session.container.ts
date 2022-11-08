import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'moveo-task-login-container',
  templateUrl: './session.container.html',
})
export class SessionContainerComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}