import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BodyComponent } from './body.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    BodyComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  bootstrap: [BodyComponent],
  exports:[BodyComponent]
})
export class BodyComponentModule { }
