import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouthwestDetailsPage } from './southwest-details.page';

const routes: Routes = [
  {
    path: '',
    component: SouthwestDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouthwestDetailsPageRoutingModule {}
