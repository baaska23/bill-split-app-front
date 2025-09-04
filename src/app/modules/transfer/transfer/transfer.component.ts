import {Component, OnInit} from '@angular/core';
import { TransferService } from './transfer.service';

@Component({
  selector: 'app-send',
  templateUrl: 'transfer.component.html'
})

export class TransferComponent implements OnInit {
  constructor(private service: TransferService) {}

  ngOnInit() {
    console.log("This is send component");
  }
}
