import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

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


  checkboxForm: FormGroup = new FormGroup({
    checkbox: new FormControl(false)
  });

  disable() {
    this.disabled = !this.disabled
  }

  submit() {
    this.checkboxForm.get('checkbox')?.setValue(!this.checkboxForm.get('checkbox')?.value)
  }
}
