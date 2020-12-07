import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoutheastDetailsPage } from './southeast-details.page';

const routes: Routes = [
  {
    path: '',
    component: SoutheastDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoutheastDetailsPageRoutingModule {}
