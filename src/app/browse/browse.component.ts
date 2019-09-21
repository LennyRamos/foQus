import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  search() {
    console.log('About to search this hoe');
  }
}
