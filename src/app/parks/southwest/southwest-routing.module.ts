import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouthwestPage } from './southwest.page';

const routes: Routes = [
  {
    path: '',
    component: SouthwestPage
  },
  {
    path: 'southwest-details',
    loadChildren: () => import('./southwest-details/southwest-details.module').then( m => m.SouthwestDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouthwestPageRoutingModule {}
