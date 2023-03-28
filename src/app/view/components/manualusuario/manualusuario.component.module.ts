import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ManualusuarioComponent } from './manualusuario.component';
import { CommonModule } from '@angular/common';
import { ManualRoutingModule } from './manual-routing.module';


@NgModule({
  declarations: [
    ManualusuarioComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  bootstrap: [ManualusuarioComponent],
  exports:[ManualusuarioComponent]
})
export class ManualusuarioComponentModule { }
