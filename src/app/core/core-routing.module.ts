import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'patterns',
    pathMatch: 'full'
  },
  {
    path: 'patterns',
    loadChildren: () =>
      import('../patterns/patterns.module').then((m) => m.PatternsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
