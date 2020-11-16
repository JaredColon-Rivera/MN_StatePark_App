import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentralPage } from './central.page';

const routes: Routes = [
  {
    path: '',
    component: CentralPage
  },
  {
    path: 'central-details',
    loadChildren: () => import('./central-details/central-details.module').then( m => m.CentralDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentralPageRoutingModule {}
