import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { BillCreateComponent } from '../bill-create/bill-create.component';
import { BillListService } from './bill-list.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: 'bill-list.component.html',
})

export class BillListComponent implements OnInit {
  @Input() header: string = '';
  cardData: any[] = [];
  groupId: any

  groupCardData: any[] = []

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService,
    private service: BillListService
  ) {}

  ngOnInit() {
    this.groupId = this.route.snapshot.paramMap.get('group_id');
    this.service.getBills$().subscribe(data => {
      this.cardData = data;
    });
    this.service.getGroupById$(this.groupId).subscribe(data => {
      this.groupCardData = data;
      this.header = this.groupCardData['name'];
      this.cardData = data.bills || []; 
      console.log("groupCardData: ", this.groupCardData);
      console.log("cardData: ", this.cardData);
    })
  }
  goToBillDetail(card: any) {
    this.router.navigate(['/group/bill-detail/', this.groupId, card.name]);
  }

  onNew(){
    this.dialogService.open(BillCreateComponent, {
      data: {group_id: this.groupId},
      header: 'Create bill',
      width: '30vw',
      height: '30vw'
    })
  }
}

