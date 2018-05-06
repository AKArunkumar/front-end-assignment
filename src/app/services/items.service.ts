import { Injectable } from '@angular/core';

import { Item } from '../models/item';

@Injectable()
export class ItemsService {
  shopItems: Item[] = [
    new Item(1, "Item1", "http://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2012/05/000003056-bollinger.jpg", 100),
    new Item(2, "Itme2", "http://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2012/05/000003056-bollinger.jpg", 100),
    new Item(3, "Item3", "http://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2012/05/000003056-bollinger.jpg", 100),
    new Item(4, "Item4", "http://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2012/05/000003056-bollinger.jpg", 100),
    new Item(5, "Item4", "http://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2012/05/000003056-bollinger.jpg", 100),
    new Item(6, "Item4", "http://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2012/05/000003056-bollinger.jpg", 100)
  ]

  constructor() { }

  getItems() {
    return this.shopItems.slice();
  }

}
