import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoutheastPage } from './southeast.page';

const routes: Routes = [
  {
    path: '',
    component: SoutheastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoutheastPageRoutingModule {}
