import {Component, OnInit} from '@angular/core';
import {GroupListService} from './group-list.service';
import { ListColumn } from '../../core/base-list/base-list.component';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GroupCreateComponent } from '../group-create/group-create.component';

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
    this.isLoading = false;
  }

  cardData: any[] = [
    {id: 1, name: "Friends party", category: "Friends", iconUrl: "pi pi-users"},
    {id: 2, name: "Speaking club", category: "Community", iconUrl: "pi pi-users"},
    {id: 3, name: "Unitelz CS team", category: "Work", iconUrl: "pi pi-users"},
    {id: 4, name: "Apartment sharing", category: "Household", iconUrl: "pi pi-users"},
  ]

  constructor(
    private service: GroupListService,
    private router: Router,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    console.log("This is group list component");
  }

  goToCardDetail(card: any) {
    this.router.navigate(['/group/bill', card.name]);
  }

  onNew(){
    this.dialogService.open(GroupCreateComponent, {
      header: 'Create group',
      width: '30vw',
      height: '30vw'
    })
  }
}
