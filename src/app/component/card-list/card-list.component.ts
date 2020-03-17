import { Component, OnInit } from '@angular/core';
import { Item } from "src/app/model/item.model";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styles: []
})
export class CardListComponent implements OnInit {
  Items = Item;
  constructor() { }

  ngOnInit(): void {
  }

}
