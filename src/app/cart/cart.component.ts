import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cardItems;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cardItems = this.cartService.cartItems;
  }

  getSum() {
    let sum;
    for (let cardItem of this.cardItems) {
      sum = sum + cardItem.price;
    }
    return sum;
  }

}
