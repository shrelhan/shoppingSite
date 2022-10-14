import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../utils/models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  cart = new BehaviorSubject<Cart>({ items: [] });
  constructor(private snackbar: MatSnackBar) {}

  addToCart(item: CartItem) {
    const items = [...this.cart.value.items];
    const itemsInCart = items.find((_item) => _item.id === item.id);
    if (itemsInCart) {
      itemsInCart.quantity += 1;
    } else {
      items.push(item);
    }
    this.cart.next({ items });
    this.snackbar.open('1 item added to cart', 'OK', { duration: 3000 });
  }
  getTotal(item: Array<CartItem>): number {
    return item
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }
  clearCart() {
    this.cart.next({ items: [] });
    this.snackbar.open('Cart cleared', 'OK', { duration: 3000 });
  }
  removeCartItem(item: CartItem, update = true) {
    const updatedCartItems = this.cart.value.items.filter(
      (item) => item.id !== item.id
    );
    if (update) {
      this.cart.next({ items: updatedCartItems });
      this.snackbar.open('1 item deleted', 'OK', { duration: 3000 });
    }
    return updatedCartItems;
  }
  removeFromCart(item: CartItem) {
    let itemRemoved: CartItem | undefined;
    let filteredList = this.cart.value.items.map((item) => {
      if (item.id === item.id) {
        item.quantity--;
        if (item.quantity === 0) {
          itemRemoved = item;
        }
      }
      return item;
    });
    if (itemRemoved) {
      filteredList = this.removeCartItem(itemRemoved, false);
    }
    this.cart.next({ items: filteredList });
    this.snackbar.open('1 item deleted', 'OK', { duration: 3000 });
  }
}
