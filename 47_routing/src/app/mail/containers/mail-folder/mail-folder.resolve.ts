import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { MailService } from '../../services/mail.service';
import { Mail } from '../../models/mail.iterface';

@Injectable()
export class MailFolderResolve implements Resolve<Mail[]> {
  constructor(private mailService: MailService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.mailService.getFolder(route.params.name);
  }
}