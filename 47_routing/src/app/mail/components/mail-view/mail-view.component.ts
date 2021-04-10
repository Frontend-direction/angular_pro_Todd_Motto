import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.scss']
})
export class MailViewComponent implements OnInit {

  message: Observable<any> = this.route.data
  .pipe(map(d => d.message))

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
