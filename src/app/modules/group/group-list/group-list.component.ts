import {Component, OnInit} from '@angular/core';
import {GroupListService} from './group-list.service';
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

  userFields = [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'age', label: 'Age', type: 'number' }
  ];
  userModel = {};
  isLoading = false;
  userHeader: string = 'Group form';

  handleSubmit(formValue: any) {
    this.isLoading = true;
    // ...submit logic...
    this.isLoading = false;
  }

  constructor(private service: GroupListService) {}

  ngOnInit() {
    console.log("This is group list component");
  }
}
