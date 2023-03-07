import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'button[alt-button], a[alt-button]',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'alt-button',
    '[class.alt-button-disabled]': 'disabled',
    '[attr.disabled]': 'disabled || null',
    '[class.alt-button-primary]': 'altType === "primary"',
    '[class.alt-button-default]': 'altType === "default"',
    '[class.alt-button-dashed]': 'altType === "dashed"',
    '[class.alt-button-text]': 'altType === "text"',
    '[class.alt-button-link]': 'altType === "link"',
    '[class.alt-button-sm]': 'size === "sm"',
    '[class.alt-button-lg]': 'size === "lg"',
  }
})
export class ButtonComponent {

  @Input() disabled: boolean = false;
  @Input() altType: 'primary' | 'default' | 'dashed' | 'text' | 'link' = 'default';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
}
