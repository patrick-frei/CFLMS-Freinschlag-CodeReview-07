import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.cartItems;
  }

  getSum() {
    let sum: number = 0;
    for (let cartItem of this.cartItems) {
      sum += Number(cartItem.price);
    }
    return sum;
  }

}
