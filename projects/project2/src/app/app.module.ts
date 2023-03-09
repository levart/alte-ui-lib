import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CheckboxComponent, InputDirective} from "../../../ui/src/lib/forms";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonComponent} from "../../../ui/src/lib/ui/button/button.component";
import {RadioComponent} from "../../../ui/src/lib/forms/radio/radio.component";
import {LabelComponent} from "../../../ui/src/lib/forms/label/label.component";
import {FormItemComponent} from "../../../ui/src/lib/forms/form-item/form-item.component";
import {CardComponent} from "../../../ui/src/lib/ui/card/card.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputDirective,
    CheckboxComponent,
    ButtonComponent,
    RadioComponent,
    LabelComponent,
    FormItemComponent,
    CardComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
