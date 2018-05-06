import { Component, OnInit } from '@angular/core';

import { ItemsService } from '../services/items.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Item[];
  constructor(private itemservice: ItemsService) { }

  ngOnInit() {
    this.cartItems = this.itemservice.getItems();
  }

  increment(id: number, quantity: string) {
    // console.log(id, quantity);
    localStorage.setItem(JSON.stringify(id), quantity);
    
  }
  decrement(id: number, quantity: string) {
    // console.log(id, quantity);
    localStorage.setItem(JSON.stringify(id), quantity);
  }
  removeItem(id: number) {
    this.cartItems.splice(id, 1);
    localStorage.removeItem(JSON.stringify(id));
  }
}
