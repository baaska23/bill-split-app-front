import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { GroupListComponent } from './group-list/group-list.component';
import {BillListComponent} from './bill-list/bill-list.component';
import { BillDetailComponent } from './bill-detail/bill-detail.component';
import { CoreModule } from '../core/core.module';
const routes: Routes = [
  {
    path: '',
    component: GroupListComponent
  },
  {
    path: 'bill',
    component: BillListComponent
  },
  {
    path: 'bill-detail',
    component: BillDetailComponent
  }
]
@NgModule({
  declarations: [
    GroupListComponent,
    BillListComponent,
    BillDetailComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CoreModule
  ]
})
export class GroupModule {}
