import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'moveo-task-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  code = `// program to find the factors of an integer

  // take input
  const num = prompt('Enter a positive number: ');
  
  console.log('The factors of is:');
  
  // looping through 1 to num
  for(let i = 1; i <= num; i++) {
  
      // check if number is a factor
      if(num % i == 0) {
          console.log(i);
      }
  }`

  constructor() { }

  ngOnInit(): void {
  }

}
