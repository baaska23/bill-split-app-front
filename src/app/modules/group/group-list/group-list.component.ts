import {Component, OnInit} from '@angular/core';
import {GroupListService} from './group-list.service';
import { BaseListComponent } from '../../core/base-list/base-list.component';
import { ListColumn } from '../../core/base-list/base-list.component';

@Component({
  selector: 'app-group-list',
  templateUrl: 'group-list.component.html'
})
export class GroupListComponent implements OnInit {
  groupColumns: ListColumn[] = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' }
  ];

  groupData: any[] = [
    { id: 1, name: 'Group A' },
    { id: 2, name: 'Group B' }
  ];
  groupHeader: string = 'Group List';
  showFilters: boolean = true;
  showPaginator: boolean = true;

  constructor(private service: GroupListService) {}

  ngOnInit() {
    console.log("This is group list component");
  }
}
