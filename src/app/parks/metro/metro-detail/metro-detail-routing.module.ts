import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetroDetailPage } from './metro-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MetroDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetroDetailPageRoutingModule {}
