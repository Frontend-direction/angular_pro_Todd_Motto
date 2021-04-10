import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MailAppComponent } from '../mail-app/mail-app.component';
import { MailViewComponent } from './mail-view.component';

@Injectable()
export class MailViewGuard implements CanDeactivate<MailAppComponent> {
  canDeactivate(component: MailViewComponent) {
    if(component.hasUnsavedChanges) {
      return window.confirm('Are u sure u want to leave?');
    }

    return true;
  }
}