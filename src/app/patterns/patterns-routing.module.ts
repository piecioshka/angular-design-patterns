import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoComponent } from 'src/app/patterns/inheritance/demo/demo.component';

const routes: Routes = [
  {
    path: 'inheritance',
    component: DemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatternsRoutingModule {}
