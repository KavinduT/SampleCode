import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {

  createDb() {
    const motorShows = [
      {
        name : 'Melbourne Motor Show',
        cars : [
          { make: 'Julio Mechannica', model: 'Mark 4S' },
          { make: 'Hondaka', model: 'Elisa' },
          { make: 'Moto Tourismo', model: 'Cyclissimo' },
          { make: 'George Motors', model: 'George 15' },
          { make: 'Moto Tourismo', model: 'Delta 4' },
        ]
      },
      {
        name : 'Cartopia',
        cars : [
          { make: 'Moto Tourismo', model: 'Cyclissimo' },
          { make: 'George Motors', model: 'George 15' },
          { make: 'Hondaka', model: 'Ellen' },
          { make: 'Moto Tourismo', model: 'Delta 16' },
          { make: 'Julio Mechannica', model: 'Mark 2' },
        ]
      }
  ];
    return {motorShows};
  }
  constructor() { }
}
