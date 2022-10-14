import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css'],
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'desc';
  itemsShowCount = 12;
  constructor() {}

  ngOnInit(): void {}

  onSortUpdated(newSort: string) {
    this.sort = newSort;
  }
  onItemUpdate(count: number) {
    this.itemsShowCount = count;
  }
  onColumnsUpdated(countsColumns: number) {
    this.columnsCountChange.emit(countsColumns);
  }
}
