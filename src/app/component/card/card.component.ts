import { Component, OnInit } from '@angular/core';
import { Item, Fruits } from "src/app/model/item.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {
  Items = Item;
  fruit = Fruits;
  constructor() { }

  ngOnInit(): void {
  }

}
