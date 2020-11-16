import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentralDetailsPage } from './central-details.page';

const routes: Routes = [
  {
    path: '',
    component: CentralDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentralDetailsPageRoutingModule {}
