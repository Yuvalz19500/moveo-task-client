import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'moveo-task-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements AfterViewInit {

  @ViewChild('codeEditor') codeEditor: ElementRef | undefined;

  @Input() isStudent = false;
  @Input() code: string | null = null;

  @Output() codeChange = new EventEmitter<string>();

  constructor() { }

  ngAfterViewInit(): void {
    fromEvent(this.codeEditor?.nativeElement, 'input').pipe(
      debounceTime(500)
    ).subscribe((data) => {
      this.onCodeChange(data);
    })
  }

  onCodeChange(event: any) {
    this.codeChange.emit(event.target.innerText)
  }

}
