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
   * Adds a new list to the array after a successful Post call
   */
  addNewList(newList: FoqusList): void {
    this.foQusLists.push(newList);
  }

}
