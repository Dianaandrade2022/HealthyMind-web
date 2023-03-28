import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlideComponent } from './slide.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    SlideComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [SlideComponent],
  exports:[SlideComponent]
})
export class SlideComponentModule { }
