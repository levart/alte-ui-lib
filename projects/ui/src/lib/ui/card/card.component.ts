import {Component, Input, TemplateRef} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'alt-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="alt-card-head" *ngIf="title">
      <ng-container *ngIf="isTemplateRef; else strTitle">
        <ng-container *ngTemplateOutlet="titleTemplate"></ng-container>
      </ng-container>
      <ng-template #strTitle>
        {{title}}
      </ng-template>
    </div>
    <div class="alt-card-image" *ngIf="image">
      <ng-container *ngTemplateOutlet="image"></ng-container>
    </div>
    <div class="alt-card-body">
      <ng-content></ng-content>
    </div>
    <div class="alt-card-foot" *ngIf="actions.length">
        <div *ngFor="let action of actions">
          <ng-container *ngTemplateOutlet="action"></ng-container>
        </div>
    </div>
  `,
  host: {
    class: 'alt-card'
  }
})
export class CardComponent {
  @Input() title: string | TemplateRef<any> | null = null;
  @Input() image: TemplateRef<any> | null = null;
  @Input() actions: Array<TemplateRef<any>> = [];

  get titleTemplate() {
    return this.title as TemplateRef<any>
  }

  get isTemplateRef() {
    return this.title instanceof TemplateRef
  }
}
