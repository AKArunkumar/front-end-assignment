import { Injectable } from '@angular/core';

import { Item } from '../models/item';

@Injectable()
export class ItemsService {
  shopItems: Item[] = [
    new Item(1, "Item1", "../../assets/bottle.png", 1000),
    new Item(2, "Itme2", "../../assets/bottle.png", 1000),
    new Item(3, "Item3", "../../assets/bottle.png", 1000),
    new Item(4, "Item4", "../../assets/bottle.png", 1000),
    new Item(5, "Item4", "../../assets/bottle.png", 1000),
    new Item(6, "Item4", "../../assets/bottle.png", 1000)
  ]

  constructor() { }

  getItems() {
    return this.shopItems.slice();
  }

}
