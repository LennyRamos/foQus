import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { FoqusItem } from '../_models/foqus-item';
import { FoqusList } from '../_models/foqus-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const foQusLists: FoqusList[] = [
      { id: 1, name: 'grocery list', isPrivate: false},
      { id: 2, name: 'notes', isPrivate: true},
      { id: 3, name: 'to-do', isPrivate: false },
    ];

    const foQusItems: FoqusItem[] = [
      { id: 11, name: 'apples', description: 'granny smiths ONLY', isComplete: false, listId: 1 },
      { id: 12, name: 'bananas', description: 'Qty: 6', isComplete: false, listId: 1 },
      { id: 13, name: 'carrots', description: 'stick em in Lenny\'s ass', isComplete: true, listId: 1 },
      { id: 14, name: 'life is short', description: 'enjoy it', isComplete: false, listId: 2 },
      { id: 15, name: 'put in dat', description: 'work', isComplete: false, listId: 2 },
      { id: 15, name: 'bang eric', description: 'love it', isComplete: false, listId: 3 },

    ];

    return { foQusLists, foQusItems };
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
