import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { BillCreateComponent } from '../bill-create/bill-create.component';

@Component({
  selector: 'app-bill-list',
  templateUrl: 'bill-list.component.html',
})

export class BillListComponent implements OnInit {
  @Input() header: string = '';
  cardData: any[] = [];
  groupName: any;

  groupCards: { [key: string]: any[] } = {
    "Friends party": [
      { name: "Enji party", category: "Friends", iconUrl: "pi pi-users" },
      { name: "Kai party", category: "Friends", iconUrl: "pi pi-users" }
    ],
    "Speaking club": [
      { name: "English Night", category: "Community", iconUrl: "pi pi-users" }
    ],
    "Unitelz CS team": [
      { name: "Sprint 1", category: "Work", iconUrl: "pi pi-users" }
    ],
    "Apartment sharing": [
      { name: "Rent", category: "Household", iconUrl: "pi pi-users" }
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.groupName = this.route.snapshot.paramMap.get('name')
    this.header = this.groupName;
    this.cardData = this.groupCards[this.groupName] || [];
  }

  goToBillDetail(card: any) {
    this.router.navigate(['/group/bill-detail/', this.groupName, card.name]);
  }

  onNew(){
    this.dialogService.open(BillCreateComponent, {
      header: 'Create bill',
      width: '30vw',
      height: '30vw'
    })
  }
}

