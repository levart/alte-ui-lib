import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'alt-form-item',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content></ng-content>`,
  host: {
    '[class.alt-form-item-has-success]': 'status === "success"',
    '[class.alt-form-item-has-error]': 'status === "error"',
    '[class.alt-form-item-has-warning]': 'status === "warning"',
    '[class.alt-form-item-has-validating]': 'status === "validating"',
  }
})
export class FormItemComponent {
  @Input() status: 'success' | 'error' | 'warning' | 'validating' | null = null;

}
