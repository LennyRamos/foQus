import { Component, OnInit } from '@angular/core';
import { FoqusList } from '../_models/foqus-list';
import { FoqusListService } from '../_services/foqus-list.service';
import { CreateListComponent } from '../create-list/create-list.component';

@Component({
  selector: 'app-foqus-lists',
  templateUrl: './foqus-lists.component.html',
  styleUrls: ['./foqus-lists.component.css']
})
export class FoqusListsComponent implements OnInit {
  foQusLists: FoqusList[];

  constructor(private foQusListService: FoqusListService) { }

  ngOnInit() {
    this.getLists();
  }

  getLists(): void {
    this.foQusListService.getLists()
      .subscribe(lists => this.foQusLists = lists);
  }


  /**
   * For deleting a list item
   * @param id the id of the list to be deleted
   */
 deleteList(list: FoqusList) {

    this.foQusListService.removeListItem(list.id)
    .subscribe(res => console.log(res));

    this.removeList(list);

    console.log('Just delete list');
  }

  /**
   * Adds a new list to the array after a successful Post call
   */
  addNewList(newList: FoqusList): void {
    this.foQusLists.push(newList);
  }

  /**
   * Remove a list from the array after a remove call
   * @param removeList the id of the list to be removed
   */
  removeList(removeList: FoqusList): void {
    console.log(removeList);
    console.log(this.foQusListService.getLists);
    const list = this.foQusLists.indexOf(removeList);

    this.foQusLists.splice(list, 1);
    console.log(this.foQusListService.getLists.toString);

  }
}
