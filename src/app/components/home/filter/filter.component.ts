import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();
  categories: any[] = ['shoes', 'shirts'];
  constructor() {}

  ngOnInit(): void {}

  onShowCategory(category: string) {
    this.showCategory.emit(category);
  }
}
