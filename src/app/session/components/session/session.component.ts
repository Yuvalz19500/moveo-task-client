import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';
import hljs from 'highlight.js';

@Component({
  selector: 'moveo-task-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
})
export class SessionComponent implements AfterViewInit {

  @ViewChild('codeEditor') codeEditor: ElementRef | undefined;

  @Input() isStudent = false;
  @Input() code: string | null = null;

  @Output() codeChange = new EventEmitter<string>();

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    fromEvent(this.codeEditor?.nativeElement, 'input').pipe(
      debounceTime(500)
    ).subscribe((data) => {
      this.onCodeChange(data);
      // this.codeEditor?.nativeElement.focus();
      // hljs.highlightBlock(this.codeEditor?.nativeElement);
      // this.codeEditor?.nativeElement.focus();
    })
  }

  onCodeChange(event: any) {
    this.codeChange.emit(event.target.innerText)
  }

  onTabPressedInEditor(event: any) {
    event.preventDefault();
    const currentCode = this.codeEditor?.nativeElement?.innerHTML;
    //this.renderer.setProperty(this.codeEditor?.nativeElement, 'innerHTML', currentCode + '&#9;')
  }

}
