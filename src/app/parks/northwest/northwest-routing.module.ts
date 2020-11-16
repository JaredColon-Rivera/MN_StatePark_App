import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NorthwestPage } from './northwest.page';

const routes: Routes = [
  {
    path: '',
    component: NorthwestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NorthwestPageRoutingModule {}
