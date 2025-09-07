import {Component, OnInit} from '@angular/core';
import {BillHistoryService} from './bill-history.service';
import { ListColumn } from '../../core/base-list/base-list.component';

@Component({
  selector: 'app-bill-history',
  templateUrl: 'bill-history.component.html'
})

export class BillHistoryComponent implements OnInit {
  billHistoryColumn: ListColumn[] = [
        { field: 'id', header: 'ID' },
        { field: 'name', header: 'Name' }
      ];
    
  billHistoryData: any[] = [
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

  billHistoryHeader: string = 'Bill History';

  constructor(private service: BillHistoryService) {}

  ngOnInit() {
    console.log("This is bill history component");
  }
}
