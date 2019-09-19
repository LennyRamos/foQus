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

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }

  //   this.foQusItems.push({ name } as FoqusItem);
  //   console.log('new item added');
  // }

  /**
   * Used when adding a new entry into the task list
   */
  onSubmit() {
    let name = this.foQusItemForm.value.itemName.trim();
    let description = this.foQusItemForm.value.itemDescription.trim();
    if (!name) { return; }

    this.foQusItems.push({ name, description } as FoqusItem);
    this.foQusItemForm.reset();
    console.log('new item added');
  }

  /**
   * Delete item from task list
   * @param item item to be removed
   */
  delete(item: FoqusItem): void {
    this.foQusItems = this.foQusItems.filter(i => i !== item);
    console.log('item deleted');
  }

  /**
   * Adding the task to Done section
   * @param item the item in list that was completed
   */
  iscompleted(item: FoqusItem): void {

    if (item.isComplete) {
      item.isComplete = false;
    } else {
      item.isComplete = true;
    }


    console.log('item moved to done');
  }
}
