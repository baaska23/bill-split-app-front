import {Component, OnInit} from '@angular/core';
import {BillListService} from './bill-list.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: 'bill-list.component.html',
})

export class BillListComponent implements OnInit {
  constructor(private service: BillListService) {}

  ngOnInit() {
    console.log("This is bill list component");
  }
}

