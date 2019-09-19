import { Component, OnInit } from '@angular/core';
import { FoqusItemService } from '../_services/foqus-item.service';
import { FoqusItem } from '../_models/foqus-item';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  foQusItems: FoqusItem[];

  foQusItemForm = new FormGroup({
    itemName: new FormControl(''),
    itemDescription: new FormControl('')
  });

  constructor(private foQusItemService: FoqusItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.foQusItemService.getItems()
      .subscribe(items => this.foQusItems = items);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }

    this.foQusItems.push({ name } as FoqusItem);
    console.log('new item added');
  }

  onSubmit() {
    let name = this.foQusItemForm.value.itemName.trim();
    let description = this.foQusItemForm.value.itemDescription.trim();
    if (!name) { return; }

    this.foQusItems.push({ name, description } as FoqusItem);
    this.foQusItemForm.reset();
    console.log('new item added');
  }

  delete(item: FoqusItem): void {
    this.foQusItems = this.foQusItems.filter(i => i !== item);
    console.log('item deleted');
  }
}
