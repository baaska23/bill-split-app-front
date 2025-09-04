import { Component, Input } from '@angular/core';

export interface ListColumn {
  field: string;
  header: string;
  type?: 'text' | 'number' | 'boolean' | 'dropdown' | 'date';
  alias?: string;
  filterable?: boolean;
  options?: any[];
}

@Component({
  selector: 'app-base-list',
  templateUrl: 'base-list.component.html',
  styleUrl: 'base-list.style.scss'
})
export class BaseListComponent {
  @Input() columns: ListColumn[] = [];
  @Input() data: any[] = [];
  @Input() header: string = '';
  @Input() showFilters: boolean = false;
  @Input() showPaginator: boolean = false;
  @Input() rowsPerPage!: number;
  @Input() rowsPerPageOptions!: number[];

  selectedColumns: ListColumn[] = [];
  filters: any = {};
  first: number = 0;

  ngOnInit() {
    this.selectedColumns = this.columns.length > 0 ? [...this.columns] : [];
  }

  onPageChange(event: any) {
    this.first = event.first;
  }

  clearFilters() {
    Object.keys(this.filters).forEach(key => {
      this.filters[key].value = null;
    });
  }
}