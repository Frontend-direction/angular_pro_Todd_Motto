import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mail } from '../models/mail.iterface';

@Injectable()
export class MailService {
  constructor(private http: HttpClient) {}
  getFolder(folder: string): any {
    return this.http
      .get(`/api/messages?folder=${folder}`)
      .pipe(
        map(response => response)
      )
  }
}