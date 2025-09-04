import {Component, OnInit} from '@angular/core';
import { TransferDetailService } from './transfer-detail.service';

@Component({
  selector: 'app-transfer-detail',
  templateUrl: 'transfer-detail.component.html'
})
export class TransferDetailComponent {
  constructor(private service: TransferDetailService) {}

  ngOnInit() {
    console.log("This is transfer detail component");
  }
}
