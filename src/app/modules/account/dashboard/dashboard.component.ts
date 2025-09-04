import {Component, OnInit} from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  constructor(private service: DashboardService) {}

  ngOnInit() {
    console.log("This is dashboard component");
  }
}
