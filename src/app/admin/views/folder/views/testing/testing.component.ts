import { Component, signal } from '@angular/core';
import { TableComponent } from '@/components/table/table.component';
import { HistoryTableItem } from '@/components/table/table-datasource';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialog } from '@angular/material/dialog';
import { TestingDialogComponent } from '@admin/views/folder/components/testing-dialog/testing-dialog.component';
import { MatButtonModule } from '@angular/material/button';

const EXAMPLE_DATA: HistoryTableItem[] = [
  { id: 1, name: 'Hydrogen' },
  { id: 2, name: 'Helium' },
  { id: 3, name: 'Lithium' },
  { id: 4, name: 'Beryllium' },
  { id: 5, name: 'Boron' },
  { id: 6, name: 'Carbon' },
  { id: 7, name: 'Nitrogen' },
  { id: 8, name: 'Oxygen' },
  { id: 9, name: 'Fluorine' },
  { id: 10, name: 'Neon' },
  { id: 11, name: 'Sodium' },
  { id: 12, name: 'Magnesium' },
  { id: 13, name: 'Aluminum' },
  { id: 14, name: 'Silicon' },
  { id: 15, name: 'Phosphorus' },
  { id: 16, name: 'Sulfur' },
  { id: 17, name: 'Chlorine' },
  { id: 18, name: 'Argon' },
  { id: 19, name: 'Potassium' },
  { id: 20, name: 'Calcium' },
];
@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [TableComponent, MatIconModule, MatGridListModule, MatButtonModule],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss',
})
export class TestingComponent {
  historyList = signal<HistoryTableItem[]>(EXAMPLE_DATA);
  historyColumns = signal<string[]>(['id', 'name']);
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(TestingDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
