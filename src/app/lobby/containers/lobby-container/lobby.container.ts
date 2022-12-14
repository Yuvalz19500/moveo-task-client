import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectLobbyState } from '../../store';
import { generateSessionLink, getCodeBlocks, getStudents } from '../../store/lobby.actions';

@Component({
  selector: 'moveo-task-login-container',
  templateUrl: './lobby.container.html',
})
export class LobbyContainerComponent implements OnInit {

  lobbyState$ = this.store.pipe(select(selectLobbyState));

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getCodeBlocks());
    this.store.dispatch(getStudents());
  }

  generateSessionLink(data: {studentId: number, codeBlockId: number}) {
    this.store.dispatch(generateSessionLink({payload: {codeBlockId: data.codeBlockId, studentId: data.studentId}}));
  }

}