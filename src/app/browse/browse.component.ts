import { Component, OnInit } from '@angular/core';
import { FoqusList } from '../_models/foqus-list';
import { FoqusListService } from '../_services/foqus-list.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  searchResults: FoqusList[];
  anyResults = false;

  searchItemForm = new FormGroup({
    itemName: new FormControl(''),
    // itemTags: new FormControl('')
  });

  constructor(
    private foqusList: FoqusListService
  ) {

  }


  ngOnInit() {
  }

  /**
   * Only returns the non Private list.
   * Currently must match string exactly.
   *
   * @param searchName the entered string input by user.
   */
  private getItemsNoNPrivateItems(searchName: string): void {

    this.foqusList.getLists()
      .subscribe((searchResults: FoqusList[]) => {

        this.searchResults = [];

        searchResults.forEach(element => {
          if (!element.isPrivate && element.name === searchName) {
            this.searchResults.push(element);
            console.log(element);
          }
        });

        if (this.searchResults.length > 0) {
          this.anyResults = true;
        } else {
          this.anyResults = false;
        }

        console.log(this.searchResults);
      });
  }

  /**
   * Method called from Browse Form Component
   */
  search() {
    const searchName = this.searchItemForm.value.itemName.trim();
    this.getItemsNoNPrivateItems(searchName);
  }

}
