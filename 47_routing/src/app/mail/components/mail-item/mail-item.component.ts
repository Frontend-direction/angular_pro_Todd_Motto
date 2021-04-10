import { Component, OnInit, Input } from '@angular/core';
import { Mail } from '../../models/mail.iterface';

@Component({
  selector: 'app-mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.scss']
})
export class MailItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  message: Mail;

}
