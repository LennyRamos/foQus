import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoqusList } from '../_models/foqus-list';
import { catchError, tap } from 'rxjs/operators';
import { ConfigService } from './config.service';
import { post } from 'selenium-webdriver/http';

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

  /** GET foQus list by id. Will 404 if id not found */
  getList(id: number): Observable<FoqusList> {
    const url = `${this.foQusListUrl}/${id}`;

    return this.http.get<FoqusList>(url)
      .pipe(
        tap(_ => console.log(`fetched list by id=${id}`)),
        catchError(error => this.configService.handleError(error))
      );
  }

  /**
   * Used to add a new list to the database
   */
  addNewList(foqusList: FoqusList ): Observable<FoqusList> {
    console.log('This is about to post');
    return this.http.put<FoqusList>(this.foQusListUrl, foqusList).pipe(
      catchError(error => this.configService.handleError(error))
    );
  }

  /**
   * Delete a list from the database
   */
  removeListItem(id: number): Observable<{}> {
    const url = `${this.foQusListUrl}/${id}`;

    return this.http.delete(url).pipe(
      catchError(error => this.configService.handleError(error))
    );
  }

  /**
   * At least one of the paramateres will be not null.
   * If null then there is no change to that property.
   *
   * @param foqusList object to update in database
   */
  updateListRecord(foqusList: FoqusList): Observable<FoqusList> {
    // const url = `${this.foQusListUrl}/${foqusList.id}`;
    return this.http.put<FoqusList>(this.foQusListUrl, foqusList).pipe(
      tap(_ => console.log('updated list id=' + foqusList.id)),
      catchError(error => this.configService.handleError(error))
    );
  }

}
