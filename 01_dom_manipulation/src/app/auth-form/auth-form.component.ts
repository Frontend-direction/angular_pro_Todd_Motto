import { 
  Component, 
  Output,
  EventEmitter,
  AfterContentInit,
  ContentChildren,
  QueryList,
  ViewChild, 
  AfterViewInit,
  AfterContentChecked,
  ViewChildren,
  ChangeDetectorRef
} from '@angular/core';

import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';
import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <ng-content selector="auth-remember"></ng-content>
        <auth-message 
          [style.display]="(showMessage ? 'inherit' : 'none')">
        </auth-message>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit,AfterViewInit {
  showMessage: boolean = false;

  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;


  constructor(private cd: ChangeDetectorRef) {}

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterContentInit() {
      if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe(checked => this.showMessage = checked);
      })
      // this.remember.checked.subscribe(checked => {
      //   this.showMessage = checked;
      // });
    }
  }

  ngAfterViewInit() {
    console.log(this.message)
    this.message.forEach((item) => {
      item.days = 31;
    });

    this.cd.detectChanges();
  }

}
