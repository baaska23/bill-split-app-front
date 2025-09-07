import {Component, OnInit} from '@angular/core';
import { TransferService } from './transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send',
  templateUrl: 'transfer.component.html',
  styleUrl: 'transfer.style.scss'
})

export class TransferComponent implements OnInit {
  value: string = '';
  keys: string[] = [
    '1','2','3',
    '4','5','6',
    '7','8','9',
    '.','0','<'
  ];

  constructor(
    private service: TransferService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log("This is transfer component");
  }

  onKeyPress(key: string) {
    if(key === '<') {
      this.value = this.value.slice(0, -1);
    } else {
      this.value += key;
    }
  }

  onBack() {
    alert("Sending: " + this.value);
  }

  onSend() {
    this.router.navigate(['/transfer/friends-list'])
  }
}
