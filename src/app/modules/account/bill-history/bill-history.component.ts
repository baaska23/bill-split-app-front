import {Component, OnInit} from '@angular/core';
import {BillHistoryService} from './bill-history.service';

@Component({
  selector: 'app-bill-history',
  templateUrl: 'bill-history.component.html'
})

export class BillHistoryComponent implements OnInit {
  constructor(private service: BillHistoryService) {}

  ngOnInit() {
    console.log("This is bill history component");
  }
}
