import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ManualusuarioComponent } from './manualusuario.component';
import { CommonModule } from '@angular/common';
import { ManualRoutingModule } from './manual-routing.module';
import { MenuComponentModule } from '../menu/menu.component.module';
import { FooterComponentModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    ManualusuarioComponent
  ],
  imports: [
    CommonModule,
    MenuComponentModule,
    FooterComponentModule
  ],
  providers: [],
  bootstrap: [ManualusuarioComponent],
  exports:[ManualusuarioComponent]
})
export class ManualusuarioComponentModule { }
