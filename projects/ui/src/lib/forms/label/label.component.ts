import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'alt-label',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <label [attr.for]="altFor"
            class="alt-label">
      <ng-content></ng-content>
      <span *ngIf="required" class="alt-label-required-mark">*</span>
    </label>
  `,
})
export class LabelComponent {
  @Input() altFor: string | null = null;
  @Input() required: boolean = false;
}
