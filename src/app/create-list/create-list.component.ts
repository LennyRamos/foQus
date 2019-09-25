import { Component, OnInit } from '@angular/core';
import { FoqusListService } from '../_services/foqus-list.service';
import { FoqusListComponent } from '../foqus-list/foqus-list.component';
import { FoqusList } from '../_models/foqus-list';
import { FormGroup, FormControl } from '@angular/forms';
import { observable } from 'rxjs';


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

  constructor(private foqusListService: FoqusListService) { }

  ngOnInit() {
  }


  createNewList() {
    let name = this.foQusNewListForm.value.listName.trim();
    let isPrivate = this.foQusNewListForm.value.isPrivate;
    if (!name) { return; }

    let newList: FoqusList = { name, isPrivate };
    this.foqusListService.addNewList(newList).subscribe(res => console.log(res));
  }

}
