import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouthwestPage } from './southwest.page';

const routes: Routes = [
  {
    path: '',
    component: SouthwestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouthwestPageRoutingModule {}
