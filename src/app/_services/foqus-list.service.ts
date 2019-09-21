import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoqusList } from '../_models/foqus-list';
import { catchError, tap } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class FoqusListService {
  private foQusListUrl = 'api/foQusLists';

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) { }

  /** GET foQus lists from the server */
  getLists(): Observable<FoqusList[]> {
    return this.http.get<FoqusList[]>(this.foQusListUrl)
      .pipe(
        tap(_ => console.log('fetched lists')),
        catchError(error => this.configService.handleError(error))
      );
  }
}
