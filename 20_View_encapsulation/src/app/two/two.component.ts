import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
