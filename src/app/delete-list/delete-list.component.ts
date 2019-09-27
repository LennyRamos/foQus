import { Component, OnInit, Input } from '@angular/core';
import { FoqusListService } from '../_services/foqus-list.service';
import {FoqusListsComponent} from '../foqus-lists/foqus-lists.component';
import { FoqusList } from '../_models/foqus-list';

@Component({
  selector: 'app-delete-list',
  templateUrl: './delete-list.component.html',
  styleUrls: ['./delete-list.component.css']
})
export class DeleteListComponent implements OnInit {

  @Input() list: FoqusList;

  constructor(private foqusListService: FoqusListService, private foqusListsComponent: FoqusListsComponent) { }

  ngOnInit() {
  }

  /**
   * For deleting a list item
   * @param id the id of the list to be deleted
   */
  deleteList(id: number) {
    this.foqusListService.removeListItem(id)
    .subscribe(res => console.log(res));

    console.log('Just delete list');
    console.log(id);
  }

}
