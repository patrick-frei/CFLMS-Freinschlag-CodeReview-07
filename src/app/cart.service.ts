import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = [];
  constructor() { }
  add(product) {
    this.cartItems.push(product);
  }
}
