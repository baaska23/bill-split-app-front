import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TransferComponent } from './transfer/transfer.component';
import {FriendsListComponent} from './friends-list/friends-list.component';
import {TransferDetailComponent} from './transfer-detail/transfer-detail.component';
import { ButtonModule } from "primeng/button";
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { DialogService } from 'primeng/dynamicdialog';

const routes: Routes = [
  {
    path: '',
    component: TransferComponent
  },
  {
    path: 'friends-list',
    component: FriendsListComponent
  },
  {
    path: 'transfer-detail',
    component: TransferDetailComponent
  }
]

@NgModule({
  declarations: [
    TransferComponent,
    FriendsListComponent,
    TransferDetailComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    ButtonModule,
    CommonModule,
    CoreModule
  ],
  providers: [DialogService]
})
export class TransferModule {}
