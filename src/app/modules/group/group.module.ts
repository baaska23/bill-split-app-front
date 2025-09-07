import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { GroupListComponent } from './group-list/group-list.component';
import {BillListComponent} from './bill-list/bill-list.component';
import { BillDetailComponent } from './bill-detail/bill-detail.component';
import { PayCardComponent } from './bill-detail/pay-card/pay-card.component';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { PayFormComponent } from './bill-detail/pay-form/pay-form.component';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
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
    PayFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
    DynamicDialogModule
  ],
  providers: [DialogService]
})
export class GroupModule {}
