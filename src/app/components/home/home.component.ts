import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { StoreService } from 'src/app/services/store.service';
import { Product } from 'src/app/utils/models/product.model';

const ROW_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  cols: number = 3;
  rowheight = ROW_HEIGHT[this.cols];
  category: string | undefined;
  products: Array<Product> | undefined;
  sort = 'desc';
  count = '12';
  productSub: Subscription | undefined;
  constructor(
    private cartService: CartServiceService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productSub = this.storeService
      .getProducts(this.count, this.sort)
      .subscribe((products) => {
        this.products = products;
      });
  }
  onColumnsCountChange(colsNumber: number) {
    this.cols = colsNumber;
    this.rowheight = ROW_HEIGHT[this.cols];
  }
  onShowCategory(newCategory: string) {
    this.category = newCategory;
  }
  onAddCart(product: Product) {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }
  ngOnDestroy(): void {
    if (this.productSub) {
      this.productSub.unsubscribe();
    }
  }
}
