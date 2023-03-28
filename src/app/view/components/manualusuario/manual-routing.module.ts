import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManualusuarioComponent } from './manualusuario.component';


const routes: Routes = [
  {
    path: '',
    component: ManualusuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualRoutingModule {}
