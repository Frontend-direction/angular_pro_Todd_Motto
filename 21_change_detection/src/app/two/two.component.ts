import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TwoComponent {

  @Input()
  user;

  update() {
    this.user.name = 'Scott Raynor';
  }

}
