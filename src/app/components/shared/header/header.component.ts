import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { Cart, CartItem } from 'src/app/utils/models/card.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  private cart: Cart = { items: [] };
  itemsQuantity = 0;
  constructor(private cartService: CartServiceService) {}
  get carts(): Cart {
    return this.cart;
  }
  set carts(cart: Cart) {
    this.cart = cart;
    this.itemsQuantity = this.cart.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }
  ngOnInit(): void {
    this.cartService.cart.subscribe((cart): void => {
      this.cart = cart;
    });
  }

  getTotal(items: Array<CartItem>) {
    return this.cartService.getTotal(items);
  }
  clearCart() {
    this.cartService.clearCart();
  }
}
