import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-binding-test',
  templateUrl: './input-binding-test.component.html',
  styleUrls: ['./input-binding-test.component.css']
})
export class InputBindingTestComponent implements OnInit {

  allowNewUser = false;
  userName = 'test user';
  userAddStatus = 'No user has been added.';

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

  onUserAdd() {
    this.userAddStatus = 'New user was added. The name is ' + this.userName;
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

}
