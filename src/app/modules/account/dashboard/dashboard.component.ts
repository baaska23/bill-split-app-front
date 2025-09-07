import {Component, OnInit} from '@angular/core';
import { DashboardService } from './dashboard.service';
import { ListColumn } from '../../core/base-list/base-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  lineData: any;
  lineOptions: any;

  dashboardColumn: ListColumn[] = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' }
    ];
  
  dashboardData: any[] = [
    { id: 1, name: 'Group A' },
    { id: 2, name: 'Group B' },
    { id: 3, name: 'Group C' },
    { id: 4, name: 'Group D' },
    { id: 5, name: 'Group E' },
    { id: 6, name: 'Group F' },
    { id: 7, name: 'Group G' },
    { id: 8, name: 'Group H' },
    { id: 9, name: 'Group I' },
    { id: 10, name: 'Group J' }
  ];
  dashboardHeader: string = 'Bill History';

  constructor(
    private service: DashboardService,
    private router: Router
  ) {}

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.lineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--primary-500'),
          borderColor: documentStyle.getPropertyValue('--primary-500'),
          tension: .4
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--primary-200'),
          borderColor: documentStyle.getPropertyValue('--primary-200'),
          tension: .4
        }
      ]
    };

    this.lineOptions = {
      plugins: {
        legend: {
          labels: {
            fontColor: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
      }
    };
  }

  goToBillHistory() {
    this.router.navigate(['/account/bill-history'])
  }
}