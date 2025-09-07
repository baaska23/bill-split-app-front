import {Component, OnInit} from '@angular/core';
import { FriendsListService } from './friends-list.service';
import { ListColumn } from '../../core/base-list/base-list.component';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { PayFormComponent } from '../../group/bill-detail/pay-form/pay-form.component';

@Component({
  selector: 'app-friends-list',
  templateUrl: 'friends-list.component.html'
})

export class FriendsListComponent implements OnInit {
  friendsListColumn: ListColumn[] = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' }
  ];
      
  friendsListData: any[] = [
    { id: 1, name: 'Group A' },
    { id: 2, name: 'Group B' },
    { id: 3, name: 'Group C' },
    { id: 4, name: 'Group D' },
    { id: 5, name: 'Group E' },
    { id: 6, name: 'Group F' },
    { id: 7, name: 'Group G' },
    { id: 8, name: 'Group H' },
    { id: 9, name: 'Group I' },
    { id: 10, name: 'Group J' }
  ];
  
  constructor(
    private service: FriendsListService,
    private router: Router,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    console.log("This is friends list component");
  }

  onPay() {
    this.dialogService.open(PayFormComponent, {
      header: 'Pay form',
      width: '30vw',
      height: '30vw'
    });
  }

  goToPayForm(){
    this.router.navigate(['/transfer/transfer-detail']);
  }
}
