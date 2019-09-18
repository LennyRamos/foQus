import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { FoqusItem } from '../_models/foqus-item';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const foQusItems = [
      { id: 11, name: 'walk dog', desscription: 'I\'m just tryna yeet everywhere', isComplete: false },
      { id: 12, name: 'feed fish', desscription: '', isComplete: true },
      { id: 13, name: 'take out trash', desscription: '', isComplete: false }
    ];

    return { foQusItems };
  }

  // Overrides the genId method to ensure that an item always has an id.
  // If the items array is empty,
  // the method below returns the initial number (11).
  // if the items array is not empty, the method below returns the highest
  // item id + 1.
  genId(items: FoqusItem[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 11;
  }
}
