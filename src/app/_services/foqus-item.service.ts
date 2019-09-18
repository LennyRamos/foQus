import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { FoqusItem } from '../_models/foqus-item';

@Injectable({
  providedIn: 'root'
})
export class FoqusItemService {
  private url = 'api/foQusItems'; // URL to web api

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getItems(): Observable<FoqusItem[]> {
    return this.http.get<FoqusItem[]>(this.url)
      .pipe(
        // tap(_ => this.log('fetched items')),
        tap(_ => console.log('fetched items')),
        catchError(this.handleError<FoqusItem[]>('getItems', []))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
