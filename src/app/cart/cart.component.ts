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

}
