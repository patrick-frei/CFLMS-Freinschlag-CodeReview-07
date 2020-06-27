import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [{
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    destination: "Crete",
    hotel: {
      name: "Hotel Aphrodite",
      rating: "4"
    },
    dates: [{
      start: new Date("1995-12-17"),
      end: new Date("1995-12-24")
    }],
    price: 649,
    image: "assets/crete.jpg"
  }, {
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    destination: "Canberra",
    hotel: {
      name: "Hotel Aphrodite",
      rating: "4"
    },
    dates: [{
      start: new Date("1995-12-17"),
      end: new Date("1995-12-24")
    }, {
      start: new Date("1995-12-17"),
      end: new Date("1995-12-24")
    }, {
      start: new Date("1995-12-17"),
      end: new Date("1995-12-24")
    }],
    price: 204,
    image: "assets/canberra.jpg"
  }, {
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    destination: "California",
    hotel: {
      name: "Hotel Aphrodite",
      rating: "4"
    },
    dates: [{
      start: new Date("1995-12-17"),
      end: new Date("1995-12-24")
    }],
    price: 100,
    image: "assets/california.jpg"
  }, {
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    destination: "Thailand",
    hotel: {
      name: "Hotel Aphrodite",
      rating: "4"
    },
    dates: [{
      start: new Date("1995-12-17"),
      end: new Date("1995-12-24")
    }],
    price: 649,
    image: "assets/thailand.jpg"
  }, {
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    destination: "Mallorca",
    hotel: {
      name: "Hotel Aphrodite",
      rating: "4"
    },
    dates: [{
      start: new Date("1995-12-17"),
      end: new Date("1995-12-24")
    }],
    price: 649,
    image: "assets/mallorca.jpg"
  }];
  constructor() { }
  discount(product) {
    if (product.price > 200 && product.price <= 500) {
      return 0.1;
    } else if (product.price > 500) {
      return 0.2;
    }
  }
}
