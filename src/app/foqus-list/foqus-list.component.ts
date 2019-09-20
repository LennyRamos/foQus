import { Component, OnInit } from '@angular/core';
import { FoqusListService } from '../_services/foqus-list.service';
import { FoqusList } from '../_models/foqus-list';

@Component({
  selector: 'app-foqus-list',
  templateUrl: './foqus-list.component.html',
  styleUrls: ['./foqus-list.component.css']
})
export class FoqusListComponent implements OnInit {
  foQusLists: FoqusList[];

  constructor(private foQusListService: FoqusListService) { }

  ngOnInit() {
    this.getLists();
  }

  getLists(): void {
    this.foQusListService.getLists()
      .subscribe(lists => this.foQusLists = lists);
  }

}
