import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NorthwestDetailsPage } from './northwest-details.page';

const routes: Routes = [
  {
    path: '',
    component: NorthwestDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NorthwestDetailsPageRoutingModule {}
