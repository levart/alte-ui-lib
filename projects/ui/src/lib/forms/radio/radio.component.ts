import {ChangeDetectorRef, Component, forwardRef, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: '[alt-radio]',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ],
  template: `
    <span
      class="alt-radio"
      [class.alt-radio-checked]="checked"
      [class.alt-radio-disabled]="disabled"
    >
      <input
        type="radio"
        [ngModel]="checked"
        [disabled]="disabled"
        (ngModelChange)="radioChecked($event)"
        />
    </span>
    <span><ng-content></ng-content></span>
  `,
})
export class RadioComponent implements ControlValueAccessor{

  @Input() value: string | null = null;
  @Input() checked: boolean = false
  @Input() disabled: boolean = false


  onChange = (_: any) => {};
  onTouched = () => {};

  constructor(
    private cdr: ChangeDetectorRef,
  ) {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled
    this.cdr.markForCheck()
  }

  writeValue(obj: any): void {
    this.checked = obj
    this.cdr.markForCheck()
  }

  radioChecked(checked: boolean) {
    this.checked = checked
    this.onChange(this.value)
  }

}
