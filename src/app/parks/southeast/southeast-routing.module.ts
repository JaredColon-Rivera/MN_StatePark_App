import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoutheastPage } from './southeast.page';

const routes: Routes = [
  {
    path: '',
    component: SoutheastPage
  },
  {
    path: 'southeast-details',
    loadChildren: () => import('./southeast-details/southeast-details.module').then( m => m.SoutheastDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoutheastPageRoutingModule {}
