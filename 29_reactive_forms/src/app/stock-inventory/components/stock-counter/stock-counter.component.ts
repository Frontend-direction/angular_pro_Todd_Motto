import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


const COUNTER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StockCounterComponent),
  multi: true
};

@Component({
  selector: 'app-stock-counter',
  templateUrl: './stock-counter.component.html',
  providers: [COUNTER_CONTROL_ACCESSOR],
  styleUrls: ['./stock-counter.component.scss']
})
export class StockCounterComponent implements ControlValueAccessor {
focus: boolean;

  @Input()
  min: number = 10;
  @Input()
  max: number = 1000;
  @Input()
  step: number = 10;

  private onTouch: Function;
  private onModelChange: Function;

  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  
  writeValue(value) {
    this.value = value || 0;
  }
  
  value: number = 10;

  increment() {
    if(this.value < this.max) {
      this.value = this.value + this.step;
      this.onModelChange(this.value);
    }

    this.onTouch();
  }

  decrement() {
    if(this.value > this.min) {
      this.value = this.value - this.step;
      this.onModelChange(this.value);
    }

    this.onTouch();
  }

  onKeyDown(event: KeyboardEvent) {
    const handlers = {
      ArrowDown: () => this.decrement(),
      ArrowUp: () => this.increment(),
    }

    if(handlers[event.code]) {
      handlers[event.code]();
      event.stopPropagation();
      event.preventDefault();
    }

    this.onTouch();
  }

  onBlur(event: FocusEvent) {
    this.focus = false;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }

  onFocus(event: FocusEvent) {
    this.focus = true;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }

}
