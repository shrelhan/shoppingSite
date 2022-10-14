import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { Cart, CartItem } from 'src/app/utils/models/card.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: 'https://via.placeholder.com/150',
        name: 'snickers',
        price: 150,
        quantity: 1,
        id: 1,
      },
    ],
  };
  dataSource: Array<CartItem> = [];
  displayColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];
  constructor(private cartService: CartServiceService) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((cart) => {
      this.cart = cart;
      this.dataSource = this.cart.items;
    });
  }
  getTotal(item: Array<CartItem>): number {
    return this.cartService.getTotal(item);
  }
  increaseQuantity(item: CartItem) {
    this.cartService.addToCart(item);
  }
  decreaseQuantity(item: CartItem) {
    this.cartService.removeFromCart(item);
  }
  clearCart() {
    this.cartService.clearCart();
  }
  onRemoveCartItem(item: CartItem) {
    this.cartService.removeCartItem(item);
  }
}
