import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'moveo-task-lobby-code-block-item',
  templateUrl: './lobby-code-block-item.component.html',
  styleUrls: ['./lobby-code-block-item.component.scss']
})
export class LobbyCodeBlockItemComponent implements OnInit {

  @Input() title: string = '';
  @Input() code: string = '';

  @Output() pickedCodeBlock = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onPickCodeBlock() {
    this.pickedCodeBlock.emit();
  }
}
