import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LobbyCodeBlock } from 'src/app/interfaces/lobby';
import { User } from 'src/app/interfaces/user';
import { StudentsModalComponent } from '../students-modal/students-modal.component';

@Component({
  selector: 'moveo-task-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  @Input() students: User[] = [];
  @Input() codeBlocks: LobbyCodeBlock[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onPickedCodeBlock() {
    const dialogRef = this.dialog.open(StudentsModalComponent, {
      width: '400px',
      height: '500px',
      data: { students: this.students }
    })
  }
}
