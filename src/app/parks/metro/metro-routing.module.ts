import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetroPage } from './metro.page';

const routes: Routes = [
  {
    path: '',
    component: MetroPage
  },
  {
    path: 'metro-detail',
    loadChildren: () => import('./metro-detail/metro-detail.module').then( m => m.MetroDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetroPageRoutingModule {}
