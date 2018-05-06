import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  
  items: Item[];
  constructor(private itemservice: ItemsService) { }

  ngOnInit() {
    this.items = this.itemservice.getItems();
  }

}
