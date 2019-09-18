import { Component, OnInit } from '@angular/core';
import { FoqusItemService } from './_services/foqus-item.service';
import { FoqusItem } from './_models/foqus-item';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foQus';

  constructor(private authService: AuthService) { }
}
