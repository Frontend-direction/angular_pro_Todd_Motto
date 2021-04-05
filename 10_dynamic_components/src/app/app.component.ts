import { Component, ViewContainerRef, ComponentRef, ViewChild, AfterViewInit, AfterContentInit, ComponentFactoryResolver } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
    <button (click)="moveComponent()">
      Move
    </button>
      <button (click)="destroyComponent()">Destroy</button>
      <div #entry></div>
    </div>
    <app-template-ref></app-template-ref>

  `
})
export class AppComponent implements AfterViewInit {

  component: ComponentRef<AuthFormComponent>;
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    this.entry.createComponent(authFormFactory);
    this.component = this.entry.createComponent(authFormFactory, 0);
    this.component.instance.title = 'Create account';
    this.component.instance.submitted.subscribe(this.loginUser)
  }

  destroyComponent() {
    this.component.destroy();
  }
  moveComponent() {
    this.entry.move(this.component.hostView, 1);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}