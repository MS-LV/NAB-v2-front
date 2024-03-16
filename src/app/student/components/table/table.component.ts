import { AfterViewInit, Component, ViewChild, Input, signal } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { UserTableDataSource, HistoryTableItem } from './table-datasource';

@Component({
  selector: 'comp-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
})
export class TableComponent implements AfterViewInit {
  @Input() list!: HistoryTableItem[];
  @Input() columns: string[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<HistoryTableItem>;
  dataSource = new UserTableDataSource();
  pageSizeOptions = signal<number[]>([5, 10, 20, 50]);

  constructor() {
  }

  ngAfterViewInit(): void {
    this.tableInit();
  }

  private tableInit() {
    this.dataSource.data = this.list;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
