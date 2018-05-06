import { Injectable } from '@angular/core';

import { Item } from '../models/item';

@Injectable()
export class ItemsService {
  shopItems: Item[] = [
    new Item(1, "Bottle", "../../assets/bottle.png", 100),
    new Item(2, "Bottle", "../../assets/bottle.png", 100),
    new Item(3, "Bottle", "../../assets/bottle.png", 100),
    new Item(4, "Bottle", "../../assets/bottle.png", 100),
    new Item(5, "Bottle", "../../assets/bottle.png", 100)
    
  ]

  constructor() { }

  getItems() {
    return this.shopItems.slice();
  }

}
