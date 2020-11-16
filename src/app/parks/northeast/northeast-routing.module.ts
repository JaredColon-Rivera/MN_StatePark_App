import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NortheastPage } from './northeast.page';

const routes: Routes = [
  {
    path: '',
    component: NortheastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NortheastPageRoutingModule {}
