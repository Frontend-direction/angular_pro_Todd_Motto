import { Component, OnInit, Input,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./one.component.scss']
})
export class OneComponent {
  @Input()
  user;

  update() {
    this.user.name = 'Matt Skiba';
  }
}
