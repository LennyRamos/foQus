import { Component, OnInit } from '@angular/core';
import { FoqusItem } from '../_models/foqus-item';
import { FormGroup, FormControl } from '@angular/forms';
import { FoqusItemService } from '../_services/foqus-item.service';
import { Location } from '@angular/common';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FoqusListService } from '../_services/foqus-list.service';
import { FoqusList } from '../_models/foqus-list';

@Component({
  selector: 'app-foqus-list',
  templateUrl: './foqus-list.component.html',
  styleUrls: ['./foqus-list.component.css']
})

export class FoqusListComponent implements OnInit {
  isCollapsed = false;
  foQusListName: string;
  foQusItems: FoqusItem[];
  private updateInfo = false;

  foQusItemForm = new FormGroup({
    itemName: new FormControl(''),
    itemDescription: new FormControl('')
  });

  foQusItemUpdateForm = new FormGroup({
    itemName: new FormControl(''),
    isPrivate: new FormControl(false)
  });

  constructor(
    private foQusListService: FoqusListService,
    private foQusItemService: FoqusItemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.foQusListService.getList(id)
      .subscribe(list => this.foQusListName = list.name);

    this.foQusItemService.getItems(id)
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
    const name = this.foQusItemForm.value.itemName.trim();
    const description = this.foQusItemForm.value.itemDescription.trim();
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

  /**
   * Edit the properties of the list
   * closes and opens form and sends update
   * if new information has be inputed
   */
  updateListProperties(): void {

    this.updateInfo = !this.updateInfo;

    if (this.updateInfo === false) {
      return;
    }

    // const listToUpdate = this.foQusListService.updateListRecord(id);
  }

  /**
   * Send the list info update to the backend
   */
  private sendUpdate() {
    const id = +this.route.snapshot.paramMap.get('id');
    // TODO get the list info and then compare to new info

    const name = this.foQusItemUpdateForm.value.itemName.trim();
    const isPrivate = this.foQusItemUpdateForm.value.isPrivate;

    this.foQusListService.getList(id)
    .subscribe(list => {
        if (list.name === '') {
          return;
        }

        if (list.name === name && list.isPrivate === isPrivate) {
          return;
        } else {
          const updateInfo: FoqusList = {id, name, isPrivate};

          this.foQusListService.updateListRecord(updateInfo);
          this.foQusListName = name;

          this.foQusListService.getList(id)
          .subscribe(list2 => console.log('new list name ' + list2.name + ' isPrivate? ' + list2.isPrivate));
          this.updateInfo = !this.updateInfo;
        }

      });

    console.log('got the update');
  }

  goBack(): void {
    this.router.navigate(['/foquslist']);
  }
}
