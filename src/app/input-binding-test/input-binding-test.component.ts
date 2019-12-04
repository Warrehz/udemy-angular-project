import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-binding-test',
  templateUrl: './input-binding-test.component.html',
  styleUrls: ['./input-binding-test.component.css']
})
export class InputBindingTestComponent implements OnInit {

  allowNewUser = false;
  userName = 'Mical';

  getTime() {
    return new Date();
  }

  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 3000)
  }

  ngOnInit() {
  }

}
