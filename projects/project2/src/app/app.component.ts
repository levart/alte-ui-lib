import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project2';
  disabled = false;
  size: 'sm' | 'md' | 'lg' = 'md';
  inputForm = 'fsd';
  inputForm2: any;

  disable() {
    this.disabled = !this.disabled
  }
}
