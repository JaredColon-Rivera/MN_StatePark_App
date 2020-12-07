import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NorthwestPage } from './northwest.page';

const routes: Routes = [
  {
    path: '',
    component: NorthwestPage
  },
  {
    path: 'northwest-details',
    loadChildren: () => import('./northwest-details/northwest-details.module').then( m => m.NorthwestDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NorthwestPageRoutingModule {}
