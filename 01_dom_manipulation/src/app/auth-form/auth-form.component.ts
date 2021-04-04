import { 
  Component, 
  Output,
  EventEmitter,
  AfterContentInit,
  ContentChildren,
  QueryList,
  ViewChild, 
  AfterViewInit,
  AfterContentChecked
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
export class AuthFormComponent implements AfterContentInit {
  showMessage: boolean = false;

  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterContentInit() {
    console.log(this.message)
    if (this.message) {
      this.message.days = 31;
    }
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe(checked => this.showMessage = checked);
      })
      // this.remember.checked.subscribe(checked => {
      //   this.showMessage = checked;
      // });
    }
  }

}
