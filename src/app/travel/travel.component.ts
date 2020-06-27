import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  products;
  constructor(private produtsService: ProductsService, private cartService: CartService) { }

  discount(product) {
    return this.produtsService.discount(product);
  }

  add(product) {
    this.cartService.add(product);
  }

  ngOnInit() {
    this.products = this.produtsService.products;
  }

}
