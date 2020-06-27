import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  products;
  cartItems;
  constructor(private router: Router, private produtsService: ProductsService, private cartService: CartService) { }

  discount(product) {
    return this.produtsService.discount(product);
  }

  add(product) {
    this.cartService.add(product);
  }

  ngOnInit() {
    this.products = this.produtsService.products;
    this.cartItems = this.cartService.cartItems;
  }

  activeRoute() {
    return this.router.url;
  }

}
