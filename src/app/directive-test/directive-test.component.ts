import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-test',
  templateUrl: './directive-test.component.html',
  styleUrls: ['./directive-test.component.css']
})
export class DirectiveTestComponent implements OnInit {

  clicks = [];
  numClick = -1;
  paraState = true;

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.clicks.push(this.clicks.length + 1);
    this.paraState === true ? this.paraState = false : this.paraState = true;
    this.numClick++;
  }

}
