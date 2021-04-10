import { Component, OnInit } from '@angular/core';
import { Mail } from '../../models/mail.iterface';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mail-folder',
  templateUrl: './mail-folder.component.html',
  styleUrls: ['./mail-folder.component.scss']
})
export class MailFolderComponent implements OnInit {
  messages: Observable<any> = this.route.data
  .pipe(map(d => d.messages))
  title: Observable<string> = this.route.params
  .pipe(
    map(el => el.name)
  )


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


}
