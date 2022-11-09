import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() link: string | null = null;

  @Output() onGenerateSessionLink = new EventEmitter<{studentId: number, codeBlockId: number}>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onPickedCodeBlock(codeBlockId: number) {
    const dialogRef = this.dialog.open(StudentsModalComponent, {
      width: '400px',
      height: '500px',
      data: { students: this.students }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.onGenerateSessionLink.emit({studentId: result, codeBlockId});
      }
    });
  }
}
