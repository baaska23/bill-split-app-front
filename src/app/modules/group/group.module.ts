import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { GroupListComponent } from './group-list/group-list.component';
import {BillListComponent} from './bill-list/bill-list.component';
import { BillDetailComponent } from './bill-detail/bill-detail.component';
import { PayCardComponent } from './bill-detail/pay-card/pay-card.component';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { PayFormComponent } from './bill-detail/pay-form/pay-form.component';
import { DialogService } from 'primeng/dynamicdialog';
import { GroupCreateComponent } from './group-create/group-create.component';
import { SharedModule } from '../core/shared.module';
import { BillCreateComponent } from './bill-create/bill-create.component';
const routes: Routes = [
  {
    path: '',
    component: GroupListComponent
  },
  {
    path: 'bill/:name',
    component: BillListComponent
  },
  {
    path: 'bill-detail/:groupName/:billName',
    component: BillDetailComponent
  }
]
@NgModule({
  declarations: [
    GroupListComponent,
    BillListComponent,
    BillDetailComponent,
    PayCardComponent,
    PayFormComponent,
    GroupCreateComponent,
    BillCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
    SharedModule
  ],
  providers: [DialogService]
})
export class GroupModule {}
