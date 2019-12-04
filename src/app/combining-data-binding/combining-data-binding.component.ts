import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combining-data-binding',
  templateUrl: './combining-data-binding.component.html',
  styleUrls: ['./combining-data-binding.component.css']
})
export class CombiningDataBindingComponent implements OnInit {

  bookName = '';

  constructor() { 
  }

  ngOnInit() {
  }

  onReset() {
    this.bookName = '';
  }


}
