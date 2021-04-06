import { Component, OnInit } from '@angular/core';
import { File } from './my-pipe/file.inteface';
import { FileSizePipe } from './my-pipe/filesize.pipe';

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
      <div *ngFor="let file of mapped">
        <p>{{ file.fileName }}</p>
        <p>{{ file.size }}</p>
      </div>
    </div>
  `,
  providers: [
    FileSizePipe,
  ]
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
  mapped: File[];
  constructor(
    private fileSizePipe: FileSizePipe,
  ) {

  }

  ngOnInit() {
    this.files = [
      { fileName: 'logo.svg', size: 2120109, type: 'image/svg' },
      { fileName: 'banner.jpg', size: 18029, type: 'image/jpg' },
      { fileName: 'background.png', size: 1784562, type: 'image/png' }
    ];

    this.mapped = this.files.map(el => {
      return {
        fileName: el.fileName,
        type: el.type,
        size: this.fileSizePipe.transform(el.size),
      }
    })
  }
}
