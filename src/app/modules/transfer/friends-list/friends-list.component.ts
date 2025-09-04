import {Component, OnInit} from '@angular/core';
import { FriendsListService } from './friends-list.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: 'friends-list.component.html'
})

export class FriendsListComponent implements OnInit {
  constructor(private service: FriendsListService) {}

  ngOnInit() {
    console.log("This is friends list component");
  }
}
