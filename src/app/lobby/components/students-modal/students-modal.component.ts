import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'moveo-task-students-modal',
  templateUrl: './students-modal.component.html',
  styleUrls: ['./students-modal.component.scss']
})
export class StudentsModalComponent implements OnInit {

  students: User[] = []

  constructor(@Inject(MAT_DIALOG_DATA) private data: DialogData) { }

  ngOnInit(): void {
    this.students = this.data.students
  }

}

interface DialogData {
  students: User[]
}