import { Component, OnInit } from '@angular/core';
import { FoqusItem } from '../_models/foqus-item';
import { FormGroup, FormControl } from '@angular/forms';
import { FoqusItemService } from '../_services/foqus-item.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foqus-list',
  templateUrl: './foqus-list.component.html',
  styleUrls: ['./foqus-list.component.css']
})
export class FoqusListComponent implements OnInit {
  isCollapsed = false;
  foQusItems: FoqusItem[];

  foQusItemForm = new FormGroup({
    itemName: new FormControl(''),
    itemDescription: new FormControl('')
  });

  constructor(
    private foQusItemService: FoqusItemService,
    private router: Router
  ) { }

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

  goBack(): void {
    this.router.navigate(['/foquslists']);
  }

}