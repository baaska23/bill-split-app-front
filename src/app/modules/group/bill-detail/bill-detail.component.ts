import {Component, OnInit} from '@angular/core';
import {BillDetailService} from './bill-detail.service';

@Component({
  selector: 'app-bill-detail',
  templateUrl: 'bill-detail.component.html',
})

export class BillDetailComponent implements OnInit {
  constructor(private service: BillDetailService) {}

  ngOnInit() {
    console.log("This is bill detail component");
  }
}
