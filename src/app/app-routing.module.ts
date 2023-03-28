import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManualusuarioComponent } from './view/components/manualusuario/manualusuario.component';
import { HomeComponent } from './view/components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./view/components/home/home.module').then(m => m.HomeComponentModule)
  },
  {
    path: 'manual-usuario',
    component: ManualusuarioComponent,
    loadChildren: () => import('../app/view/components/manualusuario/manualusuario.component.module').then(m => m.ManualusuarioComponentModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
