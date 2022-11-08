import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'moveo-task-lobby-code-block-item',
  templateUrl: './lobby-code-block-item.component.html',
  styleUrls: ['./lobby-code-block-item.component.scss']
})
export class LobbyCodeBlockItemComponent implements OnInit {

  code = `function modifyArray(arr, callback) {
    // do something to arr here
    arr.push(100);
    // then execute the callback function that was passed
    callback();
  }
  
  var arr = [1, 2, 3, 4, 5];
  
  modifyArray(arr, function() {
    console.log("array has been modified", arr);
  });`

  constructor() { }

  ngOnInit(): void {
  }

}
