import {Component, Input, OnInit} from '@angular/core';
import {BillDetailService} from './bill-detail.service';
import { ListColumn } from '../../core/base-list/base-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bill-detail',
  templateUrl: 'bill-detail.component.html',
})

export class BillDetailComponent implements OnInit {
  @Input() header: string = '';
  listColumns: ListColumn[] = [];
  listData: any[] = [];

  listCards: { [key: string]: { columns: ListColumn[], data: any[] } } = {
    "Enji party": {
      columns: [
        { field: 'id', header: 'ID' },
        { field: 'name', header: 'Name' }
      ],
      data: [
        { id: 1, name: 'Group A' },
        { id: 2, name: 'Group B' }
      ]
    },
    "Kai party": {
      columns: [
        { field: 'id', header: 'ID' },
        { field: 'name', header: 'Name' }
      ],
      data: [
        { id: 1, name: 'Group C' },
        { id: 2, name: 'Group D' }
      ]
    }
  }
  
  constructor(
    private service: BillDetailService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const billName = this.route.snapshot.paramMap.get('billName');
    this.header = billName
    const card = this.listCards[billName];
    if(card) {
      this.listColumns = card.columns;
      this.listData = card.data;
    }
  }
}
