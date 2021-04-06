import { Component, OnInit } from '@angular/core';
import { File } from './my-pipe/file.inteface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ul>
        <li *myFor="let item of items; let i = index;">
          {{ i }} Member: {{ item.name | json }}
        </li>
        <ng-template myFor [myForOf]="items" let-item let-i="index">
          <li>
            {{ i }} Member: {{ item.name | json }}
          </li>
        </ng-template>
      </ul>
      <hr>
      <div *ngFor="let file of files">
        <p>{{ file.fileName }}</p>
        <p>{{ file.size | filesize }}</p>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  items = [{
    name: 'Mark Hoppus',
    age: 44,
    location: 'California'
  },{
    name: 'Tom Delonge',
    age: 41,
    location: 'California'
  },{
    name: 'Travis Barker',
    age: 41,
    location: 'California'
  }];

  files: File[];
  // constructor() {
  //   setTimeout(() => {
  //     this.items = [...this.items, { name: 'Matt Skiba', age: 40, location: 'California' }];
  //   }, 2000);
  // }

  ngOnInit() {
    this.files = [
      { fileName: 'logo.svg', size: 2120109, type: 'image/svg' },
      { fileName: 'banner.jpg', size: 18029, type: 'image/jpg' },
      { fileName: 'background.png', size: 1784562, type: 'image/png' }
    ];
  }
}
