import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BillHistoryComponent} from './bill-history/bill-history.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'bill-history',
    component: BillHistoryComponent
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    BillHistoryComponent,
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AccountModule {}
