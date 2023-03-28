import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from './menu.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  bootstrap: [MenuComponent],
  exports:[MenuComponent]
})
export class MenuComponentModule { }
