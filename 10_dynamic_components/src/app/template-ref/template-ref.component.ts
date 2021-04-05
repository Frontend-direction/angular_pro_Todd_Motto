import { Component, OnInit, ViewChild, AfterContentInit, AfterViewInit, ViewContainerRef, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.scss']
})
export class TemplateRefComponent implements OnInit, AfterViewInit {
  ctx = {
    $implicit: 'Vova Pankiv',
    location: 'Lviv, Ukraine',
  }

  @ViewChild('entry', { read: ViewContainerRef}) entry: ViewContainerRef;
  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // this.entry.createEmbeddedView(this.tmpl, {
    //   $implicit: 'Vova Pankiv',
    //   location: "Lviv, Ukraine",
    // })
  }
}
