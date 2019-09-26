import { Component, OnInit } from '@angular/core';
import { FoqusListService } from '../_services/foqus-list.service';
import { FoqusList } from '../_models/foqus-list';
import {FoqusListsComponent} from '../foqus-lists/foqus-lists.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  foQusNewListForm = new FormGroup({
    listName: new FormControl(''),
    isPrivate: new FormControl('')
  });

  constructor(private foqusListService: FoqusListService, private foqusListsComponent: FoqusListsComponent) { }

  ngOnInit() {
  }

  /**
   * Gets all the inputs and send a post command to database if
   * user enters a non empty name for the list.
   */
  createNewList() {
    const name = this.foQusNewListForm.value.listName.trim();
    const isPrivate = this.foQusNewListForm.value.isPrivate;
    if (!name) { return; }

    const newList: FoqusList = { name, isPrivate };
    this.foqusListService.addNewList(newList)
    .subscribe(res => this.onSuccess(res));

    console.log('New list addded');
  }

  /**
   * public function to call all the other functions
   * @param fq is the new list item to pass to addNewList()
   */
  onSuccess(fq: FoqusList) {
    this.addNewList(fq);
    this.clearModal();
  }

  /**
   * Clears the modal inputs
   */
  private clearModal(): void {
    this.foQusNewListForm.reset();
  }

  /**
   * @param foqList The new list to add the users list
   */
  private addNewList(fq: FoqusList): void {
    this.foqusListsComponent.addNewList(fq);
  }

  /**
   * close the modal popup
   */
  private closeModal(): void {
  }

}
