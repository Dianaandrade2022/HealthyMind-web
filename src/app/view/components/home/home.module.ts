import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponentModule } from '../menu/menu.component.module';
import { HomeComponent } from './home.component';
import { SlideComponentModule } from '../slide/slide.component.module';
import { BodyComponentModule } from '../body/body.component.module';
import { CommonModule } from '@angular/common';
import { FooterComponentModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MenuComponentModule,
    SlideComponentModule,
    BodyComponentModule,
    FooterComponentModule
  ],
  providers: [],
  bootstrap: [HomeComponent],
  exports:[HomeComponent]
})
export class HomeComponentModule { }
