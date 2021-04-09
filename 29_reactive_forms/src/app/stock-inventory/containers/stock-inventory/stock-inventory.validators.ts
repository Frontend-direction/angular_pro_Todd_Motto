import { AbstractControl } from '@angular/forms';

export class StockValidators {
  static checkBranch(control :AbstractControl) {
    const regex = /^[a-z]\d{3}$/i;
    const valid = regex.test(control.value);

    return valid ? null : { invalidBranch: true };
  }
}