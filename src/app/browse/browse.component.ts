import { Component, OnInit } from '@angular/core';
import { FoqusList } from '../_models/foqus-list';
import { FoqusListService } from '../_services/foqus-list.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  searchResults: FoqusList[];

  constructor(
    private foqusList: FoqusListService
  ) {

   }


  ngOnInit() {
  }

  getItems(): void {
    this.foqusList.getLists()
      .subscribe(items => this.searchResults = items);
  }

  search() {
    this.getItems();
    console.log(this.searchResults);
    console.log('About to search this hoe');
  }
}
