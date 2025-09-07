import {Component, OnInit} from '@angular/core';
import { TransferDetailService } from './transfer-detail.service';
import { DialogService } from 'primeng/dynamicdialog';
import { PayFormComponent } from '../../group/bill-detail/pay-form/pay-form.component';

@Component({
  selector: 'app-transfer-detail',
  templateUrl: 'transfer-detail.component.html'
})
export class TransferDetailComponent {
  constructor(
    private service: TransferDetailService,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    console.log("This is transfer detail component");
  }

  onPay() {
    this.dialogService.open(PayFormComponent, {
      header: 'Pay form',
      width: '30vw',
      height: '30vw'
    });
  }
}
