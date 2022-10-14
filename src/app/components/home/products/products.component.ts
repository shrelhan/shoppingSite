import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/utils/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input() fullWidth = false;
  @Output() addToCart = new EventEmitter();
  @Input() product: Product | undefined;
  constructor() {}

  ngOnInit(): void {}
  onAddToCart() {
    this.addToCart.emit(this.product);
  }
}
