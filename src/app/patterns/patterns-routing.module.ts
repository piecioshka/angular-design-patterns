import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inheritance',
    pathMatch: 'full'
  },
  {
    path: 'inheritance',
    loadChildren: () => import('./inheritance/inheritance.module').then(m => m.InheritanceModule),
  },
  {
    path: 'composition',
    loadChildren: () => import('./composition/composition.module').then(m => m.CompositionModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatternsRoutingModule {}
