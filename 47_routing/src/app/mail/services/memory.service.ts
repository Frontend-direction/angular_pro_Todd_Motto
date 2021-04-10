import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      const messages = [
        {
          "id": 1,
          "folder": "inbox",
          "from": "Jane Smith",
          "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus",
          "full": "Full message from Jane Smith",
          "timestamp": 1487848162905
        },
        {
          "id": 2,
          "folder": "inbox",
          "from": "John Doe",
          "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus",
          "full": "Full message from John Doe",
          "timestamp": 1487845787719
        },
        {
          "id": 3,
          "folder": "inbox",
          "from": "Joseph Hanes",
          "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus",
          "full": "Full message from Joseph Hanes",
          "timestamp": 1487845787719
        },
        {
          "id": 4,
          "folder": "trash",
          "from": "Laurence Murray",
          "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus",
          "full": "Full message from Laurence Murray",
          "timestamp": 1487845787719
        }
      ];
    

    return { messages };
  }
}