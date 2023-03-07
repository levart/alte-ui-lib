import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  OnInit, Output
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";

let altCheckboxId = 0;

@Component({
  selector: '[alt-checkbox]',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements OnInit, OnDestroy, AfterViewInit, ControlValueAccessor{

  @Input() altValue: boolean = false;
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;
  @Input() id: string | null = null;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Output() checkedChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChange = (_: any) => {};
  onTouched = () => {};

  get checkboxId(): string {
    return 'alt-checkbox-'+ altCheckboxId++
  }

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }

  writeValue(value: boolean): void {
    this.checked = value;
    this.cdr.markForCheck();
  }


  checkedChange(checked: boolean) {
    if(!this.disabled){
      this.checked = checked;
      this.onChange(this.checked);
      this.checkedChanged.emit(this.checked);
    }
  }
}
